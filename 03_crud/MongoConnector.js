var USER = '',
    PASS = '',
    HOST = 'localhost',
    PORT = '27017',
    DB   = 'test';
    
var connectionString = '';
if (USER) {
    connectionString += USER;
    if (PASS) {
        connectionString += ':'+PASS;
    }
}
connectionString += '@'+HOST+':'+PORT+'/'+DB;


var mongoose = require('mongoose');
mongoose.connect('mongodb://'+connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info("we're connected!");
});