const { app, BrowserWindow } = require('electron') // introduce needed variables
const path = require('path') // something needed :D

// function for creating the main application window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js") // preload.js is loaded before the main application and has access to node and electron variables
        }
    })
    
    win.loadFile("index.html"); //load index.html as the main page
}

// call the window create function and open the app
app.whenReady().then(() => {
    createWindow();
})

// close the app on windows and linux when the windows are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})