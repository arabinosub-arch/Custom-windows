import React, { useState, useEffect } from 'react';
import '../styles/taskbar.css';

interface TaskbarProps {
  systemInfo: any;
}

const Taskbar: React.FC<TaskbarProps> = ({ systemInfo }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="taskbar">
      <div className="taskbar-start">
        <button className="start-button">Start</button>
        <div className="taskbar-apps">
          <button className="app-button">🗂️</button>
          <button className="app-button">🌐</button>
          <button className="app-button">💬</button>
        </div>
      </div>
      <div className="taskbar-end">
        <div className="system-tray">
          <span className="tray-icon">🔊</span>
          <span className="tray-icon">🔋</span>
          <span className="clock">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
