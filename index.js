const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to our website, from all Devs. ');
});

app.listen(3000);

