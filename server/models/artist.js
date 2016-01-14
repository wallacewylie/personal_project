var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
    imageURL: String,
    name: String,
    descript: String,
    tag: String
});

module.exports = mongoose.model("Artist", ArtistSchema);