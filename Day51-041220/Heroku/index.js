const express = require('express');
const app = express();
const cowsay = require('cowsay');
require('dotenv').config();

app.get('/', (req, res) => {
  let content = `<p style="white-space:pre; font-family:Courier, monospace">`;
  content += cowsay.say({
    text: 'Hello, World',
    e: '^^',
    T: 'T',
  });
  content += '</p>';
  res.status(200).send(content);
});

app.get('/cowsay/:msg', (req, res) => {
  let content = '<pre>';
  content += cowsay.say({
    text: req.params.msg,
    e: 'oO',
    T: 'U ',
  });
  content += '</pre>';
  res.status(200).send(content);
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}
app.listen(port, () => console.log('server start..'));
