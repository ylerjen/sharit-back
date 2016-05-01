'use strict';
var News = require('../03_database/model/NewsDbModel');

class NewsBusiness {
    static getById (id, successCb) {
        var news = null;
        if (id) {
            News.findById(id, successCb);
        }
    }
    static find (criteria, successCb) {
        News.find(criteria, successCb);
    }
    static upsert (news, successCb) {
        new News(news).save(news, successCb);
    }
    static destroy (id, successCb) {
        var criteria = {_id: id};
        News.findOneAndRemove(criteria, successCb);
    } 
}

module.exports = NewsBusiness;