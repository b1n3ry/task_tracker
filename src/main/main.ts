import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { createServer } from '../server/server';

const isDev = process.env.NODE_ENV !== 'production';
let mainWindow: BrowserWindow | null = null;

function getPreloadPath(): string {
  return path.join(__dirname, '../preload/preload.js');
}

async function createMainWindow(): Promise<void> {
  const serverPort = await createServer();

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: getPreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const devUrl = 'http://localhost:5173';
  const prodUrl = new URL(`file://${path.join(__dirname, '../renderer/index.html')}`).toString();

  if (isDev && process.env.VITE_DEV_SERVER) {
    await mainWindow.loadURL(devUrl);
    mainWindow.webContents.openDevTools();
  } else {
    await mainWindow.loadURL(prodUrl);
  }

  ipcMain.handle('get-server-port', () => serverPort);
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) void createMainWindow();
});


