var data = require('../data/artists');

var getArtist = function(){
    var artist;

    artist = data.artists[0];

    //Need to figure out, how to get a random, then plug that random number in where 0 is.

    return artist;
};

module.exports = getArtist;