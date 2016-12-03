import express from "express";
import path from "path";
import open from "open";
import browserSync from "browser-sync";
const port = 3000;
const app = express();

if (app.get('env') == 'development') {
    
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