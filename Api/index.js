const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
const routes = require('./routes/products');

app.use(cors());

app.use('/', routes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (_req, res) => {
  res.send('¡REST Api Mercado libre - test frontend!');
});

app.listen(port, () => {
  console.log(`Servidor Express iniciado en http://localhost:${port}`);
});

module.exports = app;