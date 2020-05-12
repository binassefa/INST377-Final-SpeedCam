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


app.get('/api', (req, res) => {
 
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json';
  fetch(baseURL)
    .then((r) => r.json())
    .then((r) => r.map((dataset) => dataset))
    .then((data) => {
      console.log(data);
      res.send({ data: data });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
});

app.post('/api/post', (req, res) => {
  res.json({
    message: 'POST'
  });
});

app.put('/api/put', (req, res) => {
  res.json({
    message: 'PUT'
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));