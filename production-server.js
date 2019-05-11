const http = require('http');
const { Server } = require('node-static');

const CONFIG = {
  from: './dist',
  serve: {
    port: 4200,
    host: '0.0.0.0'
  }
};

const fileServer = new Server(CONFIG.from);

const server = http.createServer((request, response) => {
  fileServer.serve(request, response);
});

server.listen(CONFIG.serve, () => {
  console.log(`Front-End started at http://${CONFIG.serve.host}:${CONFIG.serve.port}`);
});
