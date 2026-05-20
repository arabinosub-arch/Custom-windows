import React, { useState } from 'react';
import Window from './Window';
import '../styles/desktop.css';

interface DesktopWindow {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<DesktopWindow[]>([
    {
      id: '1',
      title: 'Welcome',
      x: 100,
      y: 100,
      width: 600,
      height: 400,
      zIndex: 1,
    },
  ]);

  const bringToFront = (id: string) => {
    const maxZ = Math.max(...windows.map(w => w.zIndex));
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: maxZ + 1 } : w
    ));
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const moveWindow = (id: string, x: number, y: number) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, x, y } : w
    ));
  };

  return (
    <div className="desktop">
      {windows.map(win => (
        <Window
          key={win.id}
          window={win}
          onClose={() => closeWindow(win.id)}
          onFocus={() => bringToFront(win.id)}
          onMove={(x, y) => moveWindow(win.id, x, y)}
        />
      ))}
    </div>
  );
};

export default Desktop;
