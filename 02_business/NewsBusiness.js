var NewsCrud = require('../03_database/crud/NewsCrud');

module.exports = {
    getNewsById: function (id) {
        var news = null;
        console.log('NewsBusiness', id);
        if (id > 0) {
            news = NewsCrud.retrieve(id);
        }
        return news;
    },
    findNews: function (criteria) {
        var newsArray = [];
        return newsArray;
    }

};