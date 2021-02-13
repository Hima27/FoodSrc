var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.sendFile('index.html');
});
app.listen(1080, function () {
  console.log('Example app listening on port 3000!');
});