/**
 * if not using browser-sync, this will serve static files
 * 
 */

// const http = require('http');
// const fs = require('fs');

// const port = process.env.PORT || 3000;

// const app = http.createServer((req, res) => {
//     if (req.url === '/')
//         req.url = '/index.html';

//     if (fs.existsSync(__dirname + req.url)) {
//         res.writeHead(200);
//         res.end(fs.readFileSync(__dirname + req.url));
//     } else {
//         res.writeHead(404);
//         res.end();
//     }
// });

// app.listen(port, () => {
//     console.log(`=====> listening at ${port}`);
// });