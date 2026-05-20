import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  send: (channel: string, data: any) => ipcRenderer.send(channel, data),
  on: (channel: string, callback: Function) => ipcRenderer.on(channel, (event, ...args) => callback(...args)),
});
