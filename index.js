const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Changed and commited as second time - Dev B');
});

app.listen(3000);

