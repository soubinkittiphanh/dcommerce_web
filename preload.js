const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('posApi', {
    getPrinters: () => ipcRenderer.invoke('get-printers'), // New function
    getScreens: () => ipcRenderer.invoke('get-screens'), // Add this line
    printReceipt: (data) => ipcRenderer.send('print-command', data),
    printBarcode: (data) => ipcRenderer.send('print-barcode', data),
    getBaseUrl: () => ipcRenderer.invoke('get-base-url')
});