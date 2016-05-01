
var express = require('express'),
    app = express(),
    DbConnector  = require('./03_Database/DbConnector'),
    NewsSrv = require('./01_services/NewsSrv'),
    bodyParser = require('body-parser');

var SERVER_PORT = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mongoConnection = new DbConnector();
mongoConnection.connect();
app.listen(SERVER_PORT, () => {
  console.log('SharIt-Back app listening on port ' +SERVER_PORT+ ' !');
});


app.get('/', (req, res) => {
    res.send('SharIt service');
});
app.use(NewsSrv);