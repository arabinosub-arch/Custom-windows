import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import './styles/App.css';

interface SystemInfo {
  platform: string;
  version: string;
}

const App: React.FC = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);

  useEffect(() => {
    const getInfo = async () => {
      const info = await (window as any).electron?.getSystemInfo?.();
      setSystemInfo(info);
    };
    getInfo();
  }, []);

  return (
    <div className="app">
      <Desktop />
      <Taskbar systemInfo={systemInfo} />
    </div>
  );
};

export default App;
