const { contextBridge, ipcRenderer } = require('electron');

let currentNfcCallback = null;

ipcRenderer.on('nfc-card-scanned', (event, uid) => {
    if (currentNfcCallback) {
        currentNfcCallback(uid);
    }
});

contextBridge.exposeInMainWorld('posApi', {
    getPrinters: () => ipcRenderer.invoke('get-printers'),
    getScreens: () => ipcRenderer.invoke('get-screens'),
    printReceipt: (data) => ipcRenderer.send('print-command', data),
    printBarcode: (data) => ipcRenderer.send('print-barcode', data),
    getBaseUrl: () => ipcRenderer.invoke('get-base-url'),
    onNfcScan: (callback) => {
        currentNfcCallback = callback;
        return true;
    },
    removeNfcListener: () => {
        currentNfcCallback = null;
    }
});