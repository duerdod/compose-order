require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const graphServer = require('./graphServer');
const server = graphServer();
const path = require('path');

// ENV
const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME || '0.0.0.0';
const clientPath = path.join(__dirname, '../../client');
console.log(process.env.NODE_ENV);

const corsOptions = {
  origin: '*',
  credentials: true
};

// Static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(clientPath, 'build')));
  app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: path.join(clientPath, 'build') });
  });
}

// Apply Express as middleware to Apollo Server.
server.applyMiddleware({ app, cors: corsOptions });

// Start server
app.listen({ port, hostname }, () =>
  console.log(`Listen to ${hostname}:${port}`)
);
