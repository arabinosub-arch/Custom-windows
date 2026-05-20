// Application Types

export interface Window {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
}

export interface Application {
  id: string;
  name: string;
  icon: string;
  category: 'System' | 'Accessories' | 'Entertainment' | 'Internet' | 'Office';
  description: string;
  executable?: string;
}

export interface SystemInfo {
  platform: 'win32' | 'linux' | 'darwin';
  version: string;
  uptime: number;
  memory: {
    total: number;
    free: number;
  };
  cpu: {
    model: string;
    cores: number;
  };
}

export interface Theme {
  name: string;
  type: 'light' | 'dark';
  primaryColor: string;
  accentColor: string;
}

export interface FileSystemItem {
  id: string;
  name: string;
  type: 'file' | 'directory';
  path: string;
  size: number;
  modified: Date;
  icon?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  timestamp: Date;
  action?: {
    label: string;
    callback: () => void;
  };
}
