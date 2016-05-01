var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    key: String,
    description: String
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;