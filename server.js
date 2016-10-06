const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const express = require('express');
const SocketServer = require('ws').Server;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
})
.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Running at http://0.0.0.0:3000');
});



// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => {
    console.log(`Listening on ${ PORT }`)
  });

// Create the WebSockets server
const wss = new SocketServer({ server });
wss.on('connection', (ws) => { // Create socket
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('WS server recieved:', JSON.parse(message));
    wss.broadcast(message)
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};
