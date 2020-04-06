const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || '3001';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (_, res) => {
  res.json({
    name: 'AAA'
  });
});

app.listen(PORT);
