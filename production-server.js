const http = require('http');
const { Server } = require('node-static');

const DIRECTORY = './dist';

const fileServer = new Server(DIRECTORY);

const server = http.createServer((request, response) => {
  fileServer.serve(request, response);
});

server.listen(4200);
