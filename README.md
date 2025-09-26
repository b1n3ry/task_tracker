# Task Tracker

🚀 Cross-Platform Productivity App
An all-in-one Calendar + Notes + Time Tracking + Clock app built with Electron, React (Vite), Node.js, SQLite, and TailwindCSS.
Features:

📅 Calendar with tasks & time-blocked notes

⏱️ Time tracking & summaries

⏰ Alarms, timers, Pomodoro focus sessions

🌍 World clock & unlimited stopwatches

Stay organized, productive, and in control of your time across all devices.

## 🚀 Features

- **Calendar Module**: Display current date and calendar functionality
- **Notes Module**: Create, save, and manage notes with SQLite persistence
- **Clock Module**: Real-time clock display
- **Modern UI**: Built with TailwindCSS for a clean, responsive design
- **Cross-platform**: Works on Windows, macOS, and Linux

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Desktop**: Electron 38
- **Styling**: TailwindCSS 4
- **Backend**: Express 5 + Node.js
- **Database**: SQLite with better-sqlite3
- **Build**: electron-builder

## 📁 Project Structure

```
A:\Task_tracker
├── .gitignore
├── index.html                 # Vite entry point
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.main.json         # Electron main process
├── tsconfig.preload.json      # Electron preload script
├── vite.config.ts
├── db/
│   └── init.sql              # SQLite schema
└── src/
    ├── main/
    │   └── main.ts           # Electron main process
    ├── preload/
    │   └── preload.ts        # Electron preload script
    ├── renderer/
    │   ├── index.css         # TailwindCSS imports
    │   ├── main.tsx          # React entry point
    │   └── modules/
    │       ├── App.tsx       # Main app component
    │       ├── calendar/
    │       │   └── CalendarModule.tsx
    │       ├── clock/
    │       │   └── ClockModule.tsx
    │       └── notes/
    │           └── NotesModule.tsx
    ├── server/
    │   └── server.ts         # Express API server
    ├── shared/
    │   └── types.ts          # Shared TypeScript types
    └── types/
        └── global.d.ts       # Global type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task_tracker
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

This will:
- Start the Vite dev server on port 5173
- Launch Electron with hot reload
- Start the Express API server

### Building

Build the application:
```bash
npm run build
```

### Production

Run the built application:
```bash
npm start
```

### Packaging

Create distributable packages:
```bash
npm run package
```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Run the built application
- `npm run package` - Create distributable packages

## 🔧 Configuration

### Vite Configuration
- Entry point: `index.html`
- React plugin enabled
- Path aliases: `@shared` → `src/shared`
- Development server on port 5173

### Electron Configuration
- Main process: `src/main/main.ts`
- Preload script: `src/preload/preload.ts`
- Context isolation enabled
- Node integration disabled for security

### TailwindCSS
- Configured for React components
- Content paths: `index.html`, `src/renderer/**/*`
- PostCSS with autoprefixer

## 🗄️ Database

The application uses SQLite with the following schema:

```sql
CREATE TABLE notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  createdAt INTEGER NOT NULL
);
```

## 🔒 Security

- Context isolation enabled in Electron
- Node integration disabled in renderer
- API communication through preload script
- SQLite database with WAL mode

## 🚀 Deployment

The application can be packaged for distribution using electron-builder:

```bash
npm run package
```

This creates platform-specific installers in the `dist` folder.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Make sure port 5173 is available
2. **SQLite errors**: Ensure the `db` directory exists and is writable
3. **Build errors**: Clear `node_modules` and reinstall dependencies

### Development Tips

- Use `Ctrl+Shift+I` to open DevTools in Electron
- Check the console for any runtime errors
- The Express server runs on a random port (check console output)
