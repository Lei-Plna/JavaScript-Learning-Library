const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

const messageStack = [];

app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/message', (req, res) => {
  return res.json({
    messages: messageStack
  });
});

app.post('/message', (req, res) => {
  const message = req.body;
  messageStack.push(message);
  res.json({
    message: 'Message received'
  });
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});