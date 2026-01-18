# Pomodoro Timer Desktop App

A simple and elegant desktop Pomodoro timer application built with Electron and Vite. This app helps you manage your work sessions and breaks using the Pomodoro Technique.

## Features

- **25-minute Work Sessions** - Focus on your tasks with a dedicated work timer
- **5-minute Break Periods** - Take short breaks to recharge
- **Start/Pause/Reset Controls** - Full control over your timer
- **Session Tracking** - Keep count of completed work sessions
- **Audio Notifications** - Get alerted when each session ends
- **Frameless Window** - Clean, minimalist design with transparent window
- **Draggable Interface** - Move the timer window anywhere on your screen
- **Visual Feedback** - Color changes to indicate work vs. break mode

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ushmayne/Pomodoro-Timer-Desktop-App.git
cd Pomodoro-Timer-Desktop-App/my-app
```

2. Install dependencies:
```bash
npm install
```

## Usage

Start the development server:
```bash
npm start
```

The app will launch in a frameless window. Use the title bar to drag the window around your screen.

### Controls

- **Start Button** - Begin the work session
- **Pause Button** - Pause the current session
- **Reset Button** - Reset timer to 25:00 and clear session count

## Building

To build the app for distribution:
```bash
npm run make
```

This creates platform-specific installers in the `out/make` directory.

## Project Structure

```
my-app/
├── src/
│   ├── main.js          # Electron main process
│   ├── renderer.js      # Timer logic and UI interactions
│   ├── preload.js       # Preload script
│   └── index.css        # Styling
├── public/
│   ├── logo.jpg         # App icon
│   └── alarm.wav        # Notification sound
├── index.html           # Main HTML file
└── package.json         # Dependencies and scripts
```

## Customization

### Change Work/Break Duration
Edit the duration values in `src/renderer.js`:
```javascript
const WORK_DURATION = 25 * 60;    // 25 minutes
const BREAK_DURATION = 5 * 60;    // 5 minutes
```

### Change Notification Sound
Replace `public/alarm.wav` with your desired audio file.

## Technologies Used

- **Electron** - Desktop application framework
- **Vite** - Build tool and dev server
- **JavaScript** - Logic and interactions
- **CSS** - Styling and animations

## Author

Created by Ushmayne
