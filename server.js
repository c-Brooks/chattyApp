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
// It also keeps track of how many clients are connected
const wss = new SocketServer({ server });
wss.on('connection', (ws) => {
  console.log('Client connected');
  var connectionMsg = {
    type: 'userCountChanged',
    content: wss.clients.length
  }
  wss.broadcast(JSON.stringify(connectionMsg));

  ws.on('message', function incoming(message) {
    console.log('WS server recieved:', JSON.parse(message));
    wss.broadcast(message)
  });
  ws.on('close', () => {
    console.log('Client disconnected');
    var connectionMsg = {
      type: 'userCountChanged',
      content: wss.clients.length
    };
    wss.broadcast(JSON.stringify(connectionMsg));
  });
});

// Send message to all connected clients
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};
