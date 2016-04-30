'use strict';
var DbConnector  = require('../DbConnector'), 
    News = require('../model/NewsDbModel');
    

class NewsCrud {
    static find () {
        
    }    
    static create () {
        
    }
    static retrieve () {
        var dummyNews = new News({
            title: 'Hello world', 
            description: 'Lorem ipsum dolor sit amet'
        });
        return dummyNews;
    }
    static update () {
        
    }   
    static delete () {
        
    }
}
module.exports = NewsCrud;