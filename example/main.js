const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const join = require('path').join;

app.once('window-all-closed',function() { app.quit(); });

app.once('ready', function() {
    const w = new BrowserWindow();
    w.once('closed', function() { w = null; });
    w.loadURL('file://' + join(__dirname, 'index.html'));
});
