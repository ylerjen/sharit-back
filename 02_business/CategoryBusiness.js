'use strict';
var Category = require('../03_database/model/CategoryDbModel');

class CategoryBusiness {
    static getById (id, successCb) {
        var category = null;
        if (id) {
            Category.findById(id, successCb);
        }
    }
    static find (criteria, successCb) {
        Category.find(criteria, successCb);
    }
    static upsert (category, successCb) {
        new Category(category).save(category, successCb);
    }
    static destroy (id, successCb) {
        var criteria = {_id: id};
        Category.findOneAndRemove(criteria, successCb);
    } 
}

module.exports = CategoryBusiness;