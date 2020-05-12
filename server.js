const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));


app.get('/', function (req, res) {
  res.sendFile('/index.html', { root: '.' })
});
app.get('/index.html', function (req, res) {
  res.sendFile('/index.html', { root: '.' })
});
app.get('/about.html', function (req, res) {
  res.sendFile('public/about.html', { root: '.' })
});
app.get('/data.html', function (req, res) {
  res.sendFile('public/data.html', { root: '.' })
});
app.get('/documentation.html', function (req, res) {
  res.sendFile('public/documentation.html', { root: '.' })
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));