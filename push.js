var express = require('express'),
    exec    = require('child_process').exec;
var app = express();

app.post('/', function (req, res) {
  var proc = exec('sh ./deploy.sh');
  console.log("Call from ip", req.ip);
  res.send('ACK!');
});

var server = app.listen(17800, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});

