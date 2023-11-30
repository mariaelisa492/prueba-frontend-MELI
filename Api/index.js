const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/products');

app.use('/', routes);

app.get('/', (_req, res) => {
  res.send('¡REST Api Mercado libre - test frontend!');
});

app.listen(port, () => {
  console.log(`Servidor Express iniciado en http://localhost:${port}`);
});

module.exports = app;