const express = require("express");
const path = require("path");
const open = require("open");
const port = 3000;
const app = express();

if (app.get('env') == 'development') {
    var browserSync = require('browser-sync');
    var bs = browserSync({
        server: 'src',
        tunnel: 'ajmoro',
        logSnippet: false,
    });
    app.use(require('connect-browser-sync')(bs));
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});