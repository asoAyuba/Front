// browsersync.js
const browserSync = require('browser-sync').create();

// Inicializar BrowserSync
browserSync.init({
    proxy: "http://localhost:3000", // URL de tu servidor Node.js
    files: ["views/**/*.ejs", "public/css/*.css"], // Archivos a observar
    port: 3000, // Puerto para BrowserSync
    open: false
});