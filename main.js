const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const fs = require('fs');
const serve = require('electron-serve');

const loadURL = serve({ directory: 'dist' });

// --- 1. DYNAMIC CONFIG LOGIC ---
let configData = { BASE_URL: "http://150.95.31.23:8033" };
// let configData = { BASE_URL: "http://150.95.31.23:8033" };

function loadExternalConfig() {
    let configPath;
    if (process.env.NODE_ENV === 'development') {
        configPath = path.join(__dirname, 'config.json');
    } else {
        // In production, check both the Resources folder and next to the executable
        const resourcesPath = path.join(process.resourcesPath, 'config.json');
        const exePath = path.join(path.dirname(app.getPath('exe')), 'config.json');

        if (fs.existsSync(resourcesPath)) {
            configPath = resourcesPath;
        } else if (fs.existsSync(exePath)) {
            configPath = exePath;
        } else {
            configPath = resourcesPath; // default fallback
        }
    }

    if (fs.existsSync(configPath)) {
        try {
            const raw = fs.readFileSync(configPath);
            const parsed = JSON.parse(raw);
            if (parsed.BASE_URL) {
                configData.BASE_URL = parsed.BASE_URL;
                console.log(`ℹ️ External config loaded from: ${configPath}. BASE_URL = ${configData.BASE_URL}`);
            }
        } catch (e) { console.error("❌ JSON Parse Error:", e); }
    } else {
        console.warn(`⚠️ External config.json not found at: ${configPath}`);
    }
}

// --- 2. THE PRINT QUEUE SYSTEM ---
let isPrinting = false;
let printQueue = [];

async function processQueue() {
    if (isPrinting || printQueue.length === 0) return;

    isPrinting = true;
    const task = printQueue.shift();
    const { html, printerName, width = '80mm', isBarcode = false, copies = 1 } = task;

    console.log(`\n--- 🖨️ New Print Job ---`);
    console.log(`Type: ${isBarcode ? 'BARCODE' : 'RECEIPT'}`);
    console.log(`Target Printer: "${printerName}"`);
    console.log(`Copies: ${copies}`);

    let printWindow = new BrowserWindow({
        show: false, // Keep hidden but set to true if you want to see the "phantom" window for debugging
        webPreferences: { nodeIntegration: false, contextIsolation: true }
    });

    try {
        // Step A: Log all available printers to help you debug naming issues
        const printers = await printWindow.webContents.getPrintersAsync();
        console.log(`Available Printers on System:`, printers.map(p => `"${p.name}"`).join(', '));

        if (!printerName) {
            console.error(`❌ CRITICAL ERROR: "printerName" was NOT provided in the payload.`);
            printWindow.destroy();
            isPrinting = false;
            processQueue();
            return;
        }

        const selectedPrinter = printers.find(p => p.name === printerName);

        if (!selectedPrinter) {
            console.error(`❌ CRITICAL ERROR: Printer "${printerName}" NOT FOUND in system list.`);
            // DO NOT fallback to default - stop here so user knows configuration is wrong
            printWindow.destroy();
            isPrinting = false;
            processQueue();
            return;
        }

        // Step B: Load HTML
        await printWindow.loadURL('about:blank');

        // Barcodes usually need a specific CSS to fit the small label
        const barcodeStyle = isBarcode
            ? `<style>body { margin: 0; padding: 0; width: 40mm; height: 20mm; overflow: hidden; display: flex; justify-content: center; align-items: center; }</style>`
            : `<style>body { margin: 0; padding: 0; width: ${width}; overflow: hidden; font-family: sans-serif; }</style>`;

        const escapedHtml = (barcodeStyle + html).replace(/`/g, '\\`').replace(/\${/g, '\\${');

        // Step B: Load HTML and wait for custom web fonts (like Noto Sans Lao) to be fully loaded
        await printWindow.webContents.executeJavaScript(`
            document.open();
            document.write(\`${escapedHtml}\`);
            document.close();
        `);

        // Wait for all fonts to load (timeout after 1500ms to avoid blocking forever if offline)
        await printWindow.webContents.executeJavaScript(`
            Promise.race([
                document.fonts.ready,
                new Promise(resolve => setTimeout(resolve, 1500))
            ])
        `);

        // Measure accurate scroll height after rendering with the correct loaded fonts
        const contentHeight = await printWindow.webContents.executeJavaScript(`
            Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        `);

        console.log(`Content Rendered. True Height: ${contentHeight}px`);

        // Step C: Wait for rendering layouts to settle
        await new Promise(resolve => setTimeout(resolve, isBarcode ? 300 : 500));

        // Step D: Configure Options
        let printOptions = {
            silent: true,
            deviceName: selectedPrinter.name,
            printBackground: true,
            margins: { marginType: 'none' },
            copies: parseInt(copies) || 1
        };

        if (isBarcode) {
            console.log("Applying Barcode PageSize: 40mm x 20mm");
            printOptions.pageSize = { width: 40000, height: 20000 };
        } else if (width === 'A4' || width === 'A5') {
            printOptions.pageSize = width;
        } else {
            // Added 35mm (35000 microns) bottom padding to ensure paper feeds past the cutter head on generic models
            printOptions.pageSize = {
                width: (width === '58mm' ? 58000 : 80000),
                height: (contentHeight * 264) + 35000
            };
        }

        // Step E: Final Execution
        console.log(`Sending job to printer spooler...`);
        printWindow.webContents.print(printOptions, (success, failureReason) => {
            if (!success) {
                console.error(`❌ PRINT FAILED:`, failureReason);
            } else {
                console.log(`✅ PRINT SUCCESSFUL`);
            }

            printWindow.destroy();
            isPrinting = false;
            setTimeout(processQueue, 500);
        });

    } catch (err) {
        console.error("🚨 Queue Processing Exception:", err);
        if (printWindow) printWindow.destroy();
        isPrinting = false;
        processQueue();
    }
}

// --- 3. IPC HANDLERS ---
ipcMain.handle('get-base-url', () => configData.BASE_URL);

ipcMain.handle('get-screens', () => {
    const allDisplays = screen.getAllDisplays();
    const primaryId = screen.getPrimaryDisplay().id;
    return allDisplays.map(display => ({
        id: display.id,
        bounds: display.bounds,
        isPrimary: display.id === primaryId
    }));
});

ipcMain.handle('get-printers', async () => {
    const win = BrowserWindow.getAllWindows()[0] || new BrowserWindow({ show: false });
    const printers = await win.webContents.getPrintersAsync();
    return printers;
});

ipcMain.on('print-command', (event, payload) => {
    console.log("Received 'print-command' IPC signal");
    printQueue.push({ ...payload, isBarcode: false });
    processQueue();
});

ipcMain.on('print-barcode', (event, payload) => {
    // We explicitly set isBarcode: true here to trigger the 40x20mm logic
    console.log("Received 'print-barcode' IPC signal");
    printQueue.push({ ...payload, isBarcode: true });
    processQueue();
});

// --- 4. HARDWARE NFC INTEGRATION ---
let nfcObj = null;

function setupNativeNfc() {
    try {
        const { NFC } = require('nfc-pcsc');
        nfcObj = new NFC();

        nfcObj.on('reader', reader => {
            console.log(`🔌 NFC Reader Connected: ${reader.reader.name}`);
            reader.autoProcessing = true;

            reader.on('card', card => {
                let uid = card.uid;
                if (typeof uid !== 'string') {
                    uid = Buffer.isBuffer(uid) ? uid.toString('hex') : String(uid);
                }
                const formattedUid = uid.toUpperCase();
                console.log(`📡 NFC SCAN DETECTED: [${formattedUid}]`);

                // Broadcast to all active application windows
                BrowserWindow.getAllWindows().forEach(win => {
                    win.webContents.send('nfc-card-scanned', formattedUid);
                });
            });

            reader.on('error', err => {
                console.log(`⚠️ NFC Reader Error:`, err);
            });

            reader.on('end', () => {
                console.log(`❌ NFC Reader Disconnected: ${reader.reader.name}`);
            });
        });

        nfcObj.on('error', err => {
            console.log('nfc-pcsc library error:', err);
        });
    } catch (e) {
        console.warn("⚠️ NFC hardware integration skipped or failed (Ignore if on web layer)", e.message);
    }
}

// --- 5. WINDOW LIFECYCLE ---
function createWindow() {
    loadExternalConfig();
    const win = new BrowserWindow({
        width: 1200, height: 800,
        icon: path.join(__dirname, 'static/icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    if (process.env.NODE_ENV === 'development') {
        function loadDevServer(winTarget, url, maxRetries = 60) {
            winTarget.loadURL(url).catch(err => {
                if (maxRetries > 0) {
                    // console.log(`Waiting for Nuxt Dev Server to finish compiling... (${maxRetries} retries left)`);
                    setTimeout(() => loadDevServer(winTarget, url, maxRetries - 1), 2500);
                } else {
                    console.error("Failed to connect to Nuxt Dev Server after multiple attempts.");
                }
            });
        }
        loadDevServer(win, 'http://localhost:3000');
    }
    else { loadURL(win); }
}

app.whenReady().then(() => {
    createWindow();
    setTimeout(setupNativeNfc, 1000); // Initialize NFC reader after UI mounts
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });