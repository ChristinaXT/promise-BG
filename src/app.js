

const express = require('express');
const app = express();

const html = require('./components/main');
const things = require('./models/things');

app.get('/', (req, res) => {
  // res.set('Content-Type', 'text/html');
  // res.status(200).send(html);
  res.status(200).send(html)
});

app.get('/things', (req, res) => {
  res.send(things)
});

module.exports = app;
