import React, { useState, useRef } from 'react';
import '../styles/window.css';

interface WindowProps {
  window: {
    id: string;
    title: string;
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
  };
  onClose: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
}

const Window: React.FC<WindowProps> = ({ window, onClose, onFocus, onMove }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-header')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - window.x,
        y: e.clientY - window.y,
      });
      onFocus();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      onMove(e.clientX - dragOffset.x, e.clientY - dragOffset.y);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={windowRef}
      className="window"
      style={{
        left: `${window.x}px`,
        top: `${window.y}px`,
        width: `${window.width}px`,
        height: `${window.height}px`,
        zIndex: window.zIndex,
      }}
      onMouseDown={handleMouseDown}
      onClick={onFocus}
    >
      <div className="window-header">
        <span className="window-title">{window.title}</span>
        <div className="window-controls">
          <button className="btn-minimize">_</button>
          <button className="btn-maximize">□</button>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>
      </div>
      <div className="window-content">
        <p>Welcome to Custom Windows!</p>
        <p>This is a Windows-like desktop environment built with Electron and React.</p>
      </div>
    </div>
  );
};

export default Window;
