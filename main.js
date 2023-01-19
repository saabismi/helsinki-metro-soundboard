const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron')
const path = require('path') // something needed for the preload


// function for creating the main application window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1500,
        height:800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js") // preload.js is loaded before the main application and has access to node and electron variables
        }
    })
    
    win.loadFile("index.html"); //load index.html as the main page
}

// call the window create function and open the app
app.whenReady().then(() => {
    ipcMain.on("keypresses", (__event, value) => {
        console.log(value)
    })
    createWindow();
    globalShortcut.register("CommandOrControl+K", console.log("Ctrl+K pressed"));
})

// close the app on windows and linux when the windows are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})