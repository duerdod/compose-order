require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const graphServer = require('./graphServer');
const server = graphServer();
// const path = require('path');

// ENV
const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME || '0.0.0.0';
console.log(process.env.NODE_ENV);

const corsOptions = {
  origin: '*',
  credentials: true
};

// Middlewares

// Debugging
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    // console.log(req);
    // console.log(req.cookies);
    next();
  });
}

// Static files
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(clientPath, 'build')));
//   app.get('/*', (req, res) => {
//     res.sendFile('index.html', { root: path.join(clientPath, 'build') });
//   });
// }

// Apply Express as middleware to Apollo Server.
server.applyMiddleware({ app, cors: corsOptions });

// Start server
app.listen(() => {
  console.log(`server is running on ${port}`);
});
