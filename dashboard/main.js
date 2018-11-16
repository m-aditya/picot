'use strict';

// Mod of Electron
const electron = require ("electron");

// Module that controls the application
const app = electron.app;

// Module to create window
const BrowserWindow = electron.BrowserWindow;

// Global declaration so that main window is not GC
let mainWindow;

// Execute after completion of initialization of Electron
app.on ('ready', function () {
   // Main screen display. You can specify the width and height of the window
   mainWindow = new BrowserWindow ({width: 1200, height: 800});
   mainWindow.loadURL ('file://' + __dirname + '/index.html');

   // Close the application when the window is closed
   mainWindow.on ('closed', function () {
     mainWindow = null;
   });
});