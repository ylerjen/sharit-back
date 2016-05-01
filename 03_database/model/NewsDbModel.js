var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newsSchema = new Schema({
    title:  String,
    description: String,
    link: String,
    author: String,
    publicationDate: { type: Date, default: Date.now },
    type: String,
    meta: {
        votes: Number,
        keywords:  []
    }
});

var News = mongoose.model('News', newsSchema);

module.exports = News;