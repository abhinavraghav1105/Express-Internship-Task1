const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('<i>hello world</i>');
});

app.listen(port, () => {
  console.log(`Hello World app working at http://localhost:${port}`);
});
