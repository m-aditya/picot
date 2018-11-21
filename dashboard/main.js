'use strict';

// Mod of Electron
const electron = require ("electron");

// Module that controls the application
const app = electron.app;

// Module to create window
const BrowserWindow = electron.BrowserWindow;

// Global declaration so that main window is not GC
let mainWindow;
let splash;

// Execute after completion of initialization of Electron
app.on ('ready', function () {
  // create main browser window
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 1920,
    height: 1080,
    show: false // don't show the main window
    
});
mainWindow.setBackgroundColor("#1a2035");
// create a new `splash`-Window 
splash = new BrowserWindow({width: 800, height: 600, transparent: true, frame: false, alwaysOnTop: true});
splash.loadURL(`file://${__dirname}/splash.html`);

mainWindow.loadURL(`file://${__dirname}/index.html`);

var delayInMilliseconds = 5000; 

// if main window is ready to show, then destroy the splash window and show up the main window
mainWindow.once('ready-to-show', () => {
  setTimeout(function() {
    splash.destroy();
     mainWindow.show();
  }, delayInMilliseconds);
   });
});