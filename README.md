# Custom Windows 🪟

A cross-platform Windows-like operating system UI built with Electron, React, and TypeScript.

## Features

✨ **Windows 10/11 Style UI**
- Modern window system with draggable windows
- Windows with min/max/close controls
- Taskbar with Start menu, apps, and system tray
- Clock and system indicators

🖥️ **Cross-Platform**
- Works on Windows 10/11
- Linux (Ubuntu, Fedora, etc.)
- macOS

⚡ **Built With**
- Electron for desktop app
- React 18 for UI
- TypeScript for type safety
- Webpack for bundling

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/arabinosub-arch/Custom-windows.git
cd Custom-windows
npm install
```

### Development

```bash
npm run dev
```

This starts both the React dev server and Electron app with hot reload.

### Building

**Build for current platform:**
```bash
npm run build:windows
```

**Or build for specific platforms:**
```bash
npm run build:windows   # Windows NSIS installer
npm run build:linux     # Linux AppImage & DEB
npm run build:macos     # macOS DMG
npm run build:all       # All platforms
```

Built installers will be in the `release/` directory.

## Project Structure

```
src/
├── main/              # Electron main process
│   ├── index.ts       # App entry point
│   └── preload.ts     # IPC bridge
├── renderer/          # React UI
│   ├── App.tsx        # Main app component
│   ├── components/    # React components
│   ├── styles/        # CSS stylesheets
│   └── index.tsx      # React entry
└── common/            # Shared types
    └── types.ts       # TypeScript interfaces
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev mode |
| `npm run build` | Build for current OS |
| `npm run build:windows` | Build Windows installer |
| `npm run build:linux` | Build Linux packages |
| `npm run build:macos` | Build macOS DMG |
| `npm run build:all` | Build all platforms |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code |
| `npm run test` | Run tests |

## Development Guide

See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for detailed development instructions.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Roadmap

- [ ] File Explorer component
- [ ] System Settings panel
- [ ] More built-in apps (Notepad, Calculator, etc.)
- [ ] Virtual Desktops
- [ ] Multi-monitor support
- [ ] Dark mode support
- [ ] Right-click context menu
- [ ] Keyboard shortcuts
- [ ] Theming system

## License

MIT License - see [LICENSE](LICENSE) file

## Author

**arabinosub-arch**

Built with ❤️ using Electron and React
