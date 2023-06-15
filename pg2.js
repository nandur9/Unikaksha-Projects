const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public');

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(publicPath, 'about.html'));
});

app.get('/help', (req, res) => {
  res.sendFile(path.join(publicPath, 'help.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'nopage.html'));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
