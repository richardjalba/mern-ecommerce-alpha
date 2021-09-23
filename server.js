const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

// call express app
const app = express();
app.use(express.json);

// server.js serves static content via react app in prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// server.js connects to mongodb and runs on port 4000
const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
