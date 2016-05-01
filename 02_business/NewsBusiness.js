'use strict';
var News = require('../03_database/model/NewsDbModel');

class NewsBusiness {
    static getNewsById (id, successCb) {
        var news = null;
        if (id) {
            News.findById(id, successCb);
        }
    }
    static findNews (criteria, successCb) {
        News.find(criteria, successCb);
    }
    static upsertNews (news, successCb) {
        new News(news).save(news, successCb);
    }
    static destroyNews (id, successCb) {
        var criteria = {_id: id};
        News.findOneAndRemove(criteria);
    } 
}

module.exports = NewsBusiness;