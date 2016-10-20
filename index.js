var nproxy = require('nproxy');

var port = parseInt(process.env.PORT) || 8080;

nproxy(port, {
  responderListFilePath: './list.js',
  debug: true
});
