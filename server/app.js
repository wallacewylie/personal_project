var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Artist = require('./models/artist');

//MODULES
//var artist = require('./modules/artist');

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

//DB STUFF
var mongoURI = "mongodb://localhost:27017/artists";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.once('open', function(){
    console.log("Mongo is connected!");
});

//ROUTES
app.get("/artist/grab", function(req,res){
    Artist.find({}, function(err, artists){
        if(err){
            console.log(err);
        }
        res.send(artists);
    });
});

app.get("/artist", function(req,res){
    res.sendFile(path.join(__dirname, "/public", "/assets/views/artist.html"));
});

//Need to create a POST route, that gets data from the index.html (which artist you want to search for)
//Then, you need to reach into the database and find that specific entry into the database:
// http://mongoosejs.com/docs/queries.html
//Then, send that one artist back to the DOM.
//If you struggle more than an hour on this, come get me.



app.post("/artist", function(req,res){
    console.log(req.body);

    var artist = new Artist();

    artist.name = req.body.name;
    artist.descript = req.body.descript;

    artist.save(function(err, data){
        if(err){
            console.log("ERROR: ", err);
        }

        res.send(data);
    });

});

app.get("/*", function(req, res){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "/public", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening: ", app.get("port"));
});