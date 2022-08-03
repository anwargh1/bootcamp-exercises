const express = require('express');
const path = require('path');
const app = express();

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.get('/', function (request, response) {
   // const name = request.params.name;
   // const item = store.find((element) => element.name == name);
   // response.send(item.price);
  });
app.get('/priceCheck/:name', function (request, response) {
  const name = request.params.name;
  const item = store.find((element) => element.name == name);
  response.send({price: item.price});
});
const port = 3000;

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
