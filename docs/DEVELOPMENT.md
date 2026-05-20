# Development Guide

## Setup Development Environment

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Git

### Initial Setup

1. Clone the repository:
```bash
git clone https://github.com/arabinosub-arch/Custom-windows.git
cd Custom-windows
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The application will open with the renderer on `http://localhost:3000` and Electron main process running in parallel.

## Project Structure

```
src/
├── main/              # Electron main process
│   ├── index.ts       # Entry point
│   ├── preload.ts     # IPC bridge
│   └── ipc-handlers.ts # IPC handlers
├── renderer/          # React UI
│   ├── App.tsx        # Main component
│   ├── components/    # React components
│   ├── pages/         # Page components
│   └── styles/        # CSS styles
└── common/            # Shared code
```

## Available Scripts

### Development
- `npm run dev` - Start development mode with hot reload
- `npm run dev:main` - Compile and run main process only
- `npm run dev:renderer` - Start webpack dev server only

### Building
- `npm run build` - Build for current platform
- `npm run build:windows` - Build Windows executable
- `npm run build:linux` - Build Linux package
- `npm run build:macos` - Build macOS application
- `npm run build:all` - Build for all platforms

### Utilities
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run debug` - Run with debugging enabled

## Code Style

### TypeScript
- Use strict mode
- Avoid any types
- Use interfaces for object definitions

### React
- Use functional components with hooks
- Props should be typed
- Use React.FC for component typing

### CSS
- Use CSS variables for theming
- Follow BEM naming convention
- Mobile-first responsive design

## Adding New Components

### Create a Component

1. Create the component file in `src/renderer/components/`:

```typescript
// src/renderer/components/MyComponent.tsx
import React from 'react';
import '../styles/my-component.css';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
```

2. Add styles in `src/renderer/styles/my-component.css`:

```css
.my-component {
  padding: 16px;
  border-radius: 8px;
  background-color: white;
}

.my-component h1 {
  font-size: 18px;
  margin-bottom: 8px;
}

.my-component button {
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
}
```

3. Import and use in your app:

```typescript
import MyComponent from './components/MyComponent';

<MyComponent title="Hello" onClick={() => console.log('Clicked!')} />
```

## IPC Communication

### From Renderer to Main

```typescript
// In renderer component
const result = await (window as any).electron?.send?.('channel-name', data);
```

### From Main to Renderer

```typescript
// In main/index.ts
ipcMain.handle('get-data', async (event) => {
  return { some: 'data' };
});
```

### In preload.ts

```typescript
contextBridge.exposeInMainWorld('electron', {
  getData: () => ipcRenderer.invoke('get-data'),
});
```

## Debugging

### Main Process
- Use Chrome DevTools: Press F12 with `--debug` flag
- VSCode debugger configuration in `.vscode/launch.json`

### Renderer Process
- Use Chrome DevTools: Right-click → Inspect
- Network tab for API calls
- Console for logs

## Testing

```bash
npm run test
```

Tests should be in `src/__tests__/` directory with `.test.ts` or `.test.tsx` extension.

## Building Native Modules

For performance-critical features, you can write native Rust code:

```bash
npm install --save-dev neon-cli
```

## Common Issues

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000
# Kill process
kill -9 <PID>
```

### Module Not Found
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check import paths in tsconfig.json

### Electron Not Starting
- Check logs in console
- Verify main process compiled: `npm run build:main`

## Performance Tips

1. Use React.memo for expensive components
2. Optimize re-renders with useMemo and useCallback
3. Lazy load large modules
4. Use code splitting for vendor code

## Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
