import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getServerPort: async (): Promise<number> => ipcRenderer.invoke('get-server-port'),
});

declare global {
  interface Window {
    api: {
      getServerPort: () => Promise<number>;
    };
  }
}


