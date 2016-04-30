var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

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

newsSchema.methods.getById = function (id, cb) {
    console.log('NewsModel');
    return this.model('News').find({ id: this.id }, cb);
};



var News = mongoose.model('News', newsSchema);

module.exports = News;