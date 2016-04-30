var NewsSrv = require('./01_services/NewsSrv');


var SERVER_PORT = 3000;

var express = require('express');
var app = express();

app.listen(SERVER_PORT, () => {
  console.log('SharIt-Back app listening on port ' +SERVER_PORT+ ' !');
});


app.get('/', (req, res) => {
    res.send('SharIt service');
});
app.use(NewsSrv);