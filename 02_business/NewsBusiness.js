'use strict';
var NewsCrud = require('../03_database/crud/NewsCrud');

class NewsBusiness {
    static getNewsById (id, successCb) {
        console.log('newsbusiness::getNewsById');
        var news = null;
        if (id) {
            news = NewsCrud.retrieve(id, successCb);
        }
    }
    static findNews (criteria, successCb) {
        NewsCrud.find(criteria, successCb);
    }
    static upsertNews (news, successCb) {
        console.log('newsbusiness::upsertNews');
        NewsCrud.upsert(news, successCb);
    }
    static destroyNews (id, successCb) {
        if (id) {
            NewsCrud.destroy(id, successCb);
        }
    } 
}

module.exports = NewsBusiness;