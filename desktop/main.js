const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false, // Esperar para mostrar hasta que esté lista y maximizada
    icon: path.join(__dirname, 'build/icon.png'),
    autoHideMenuBar: true, // Desaparecer la clásica barra de Archivo/Edición superior
    webPreferences: {
      webSecurity: false, // Seguro porque es una app local cerrada
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Aniquilar el menú permanentemente
  mainWindow.removeMenu(); 

  // Cargamos la app de angular mediante el protocolo custom
  mainWindow.loadURL('app://localhost/index.html');

  // Maximizar correctamente y mostrar cuando esté lista (Linux seguro)
  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.show();
  });
  
  // Opcional: mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  // Protocolo personalizado para evadir las restricciones de 'file://' en JS 
  // y para interceptar las rutas "falsas" (SPA) de Angular (como /panel/productos)
  protocol.registerFileProtocol('app', (request, callback) => {
    let urlObj = new URL(request.url);
    let pathname = decodeURIComponent(urlObj.pathname);
    
    // Si la url comienza con /, lo quitamos para armar el path local
    if (pathname.startsWith('/')) {
      pathname = pathname.substring(1);
    }

    let targetPath = path.normalize(path.join(__dirname, 'frontend_dist', pathname));

    // Si el archivo físico no existe o es un directorio, servimos index.html (SPA Fallback)
    if (!fs.existsSync(targetPath) || fs.statSync(targetPath).isDirectory()) {
      targetPath = path.normalize(path.join(__dirname, 'frontend_dist/index.html'));
    }

    callback({ path: targetPath });
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
