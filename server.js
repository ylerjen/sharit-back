var SERVER_PORT = 3000;
var NEWS_SRV = './01_services/NewsSrv';

var express = require('express');
var app = express();

app.listen(SERVER_PORT, () => {
  console.log('SharIt app listening on port '+SERVER_PORT+' !');
});


app.get('/', (req, res) => {
    res.send('Hello from SharIt service');
});

app.use(require(NEWS_SRV));