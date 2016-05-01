'use strict';
var mongoose = require('mongoose'),
    env = require('../env');

class DbConnector {
    constructor () {
        this.connectionString = '';
        if (env.USER) {
            this.connectionString += env.USER;
            if (env.PASS) {
                this.connectionString += ':'+env.PASS;
            }
            this.connectionString += '@';
        }
        this.connectionString += env.HOST+':'+env.PORT+'/'+env.DB;
    }
    
    connect () {
        mongoose.connect('mongodb://'+this.connectionString);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.info("we're connected to mongodb !");
        });
    }
}

module.exports = DbConnector;