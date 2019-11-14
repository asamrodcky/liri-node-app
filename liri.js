require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// http://www.omdbapi.com/?i=tt3896198&apikey=ad1ea10c