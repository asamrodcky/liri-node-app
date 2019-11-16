require("dotenv").config();

var command = process.argv[2];
var item = process.argv.splice(3).join(" ")

var keys = require("./keys.js");
var axios = require("axios");  

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var OMDB = keys.omdb.key

var appID = keys.bandsintown.id
var moment = require('moment');

function switchUp() {
    switch (command) {
        case "concert-this":
            callEvent();
            break;
        case "spotify-this-song":
            callSong();
            break;
        case "movie-this":
            callMovie();
            break;
        case "do-what-it-says":
            doThis();
            break;
    }
}
switchUp();

function callEvent() {
    axios  
    axios.get("https://rest.bandsintown.com/artists/" + item + "/events?app_id=" + appID).then(
        function (response) {
            console.log("Name of Venue: " + response.data[0].venue.name);
            console.log("Location of Venue: \n Country: " + response.data[0].venue.country +
                        "\n City: " + response.data[0].venue.city);
            // console.log(moment(response.data[0].datetime).format("MM-DD-YYYY hh:mm:ss"))
            var momentDate = moment(response.data[0].datetime).format("MM-DD-YYYY hh:mm:ss").split(" ");
            console.log("Event Details: \n Date: " + momentDate[0]+
                        "\n Time: " + momentDate[1]);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function callSong() {

    spotify.search({ type: 'track', query: item }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
    });
}

//Axios call for OMDB API data, to be placed in switch "movie-this" switch command
function callMovie() {
    // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
    axios
    axios.get("http://www.omdbapi.com/?t=" + item + "&y=&plot=short&apikey=" + OMDB).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Year of release: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[1].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
            console.log("Produced in: " + response.data.Country);
            console.log("Languages: " + response.data.Language);
            console.log("Actors: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function doThis() {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        // console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        command = dataArr[0]
        item = dataArr[1]

        switchUp();

    });
}