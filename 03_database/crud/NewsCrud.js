'use strict';
var News = require('../model/NewsDbModel');
    

class NewsCrud {
    static find (criteria, successCb, errorCb) {
        News.find(criteria, successCb);
    }    
    static upsert (news, successCb) {
        console.log('will save news');
        new News(news).save(news, successCb);
    }
    static retrieve (id, successCb) {
        console.log(News);
        News.findById(id, successCb);
    }
    static destroy () {
        
    }
}
module.exports = NewsCrud;