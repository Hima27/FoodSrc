var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: __dirname });
    
});
app.listen(1080, function () {
  console.log('go to localhost:1080 to see site');
});