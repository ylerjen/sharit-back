var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    id: ObjectId,
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