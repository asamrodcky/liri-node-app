# liri-node-app

# Problem
Need a central hub/application where you get all the information of your favorite movies, songs, and artists? LIRI takes in inputs from the user and outputs information on the latest concert for a particular artist, the song details for a particular song, and similarly the movie details for a particular movie. It's as if it was Bands in Town, Spotify, and IMDB all in one. ;)

# Overview
For this application, I made LIRI. Like Apple's iPhone, Siri (Speech Interpretation and Recognition Interface), LIRI (_Language_ Interpretation and Recognition Interface). Liri is a command line application that takes in parameters and gives back data. Using the databases from Bands in Town, Spotify, and O(I)MDB Liri procures and displays information on the latest concert for a particular artist, song data (i.e. artist, song name, album) for a particular song, and movie data for any movie (i.e. Title, year of release, IMDB and Rotten Tomatoes Rating, country in which it was produced, languages it is available in, plot and the actors in the cast).

# Instructions
This is a Node.js application and thus has to be run in the bash/terminal on your computer.

In order to use this app, you must type ```node liri.js``` in your terminal window.

The application has multiple use cases:
After the ```node liri.js``` text type...
* ```concert-this``` and then the name of an artist (e.g. ```concert-this Bad Bunny``` ) to render the following information to the terminal:
    * Name of the venue
    * Location of the venue
    * Date of the event ("MM/DD/YYYY")
(images/concert-this.png)

* ```spotify-this-song``` and then the name of a song (e.g. ```spotify-this-song The Other Side of Paradise```) to show the following information to the bash window:
    * Artist(s)
    * Song name
    * A preview link of the song from Spotify
    * Album that the song is from
(images/spotify-this-song.png)

* ```movie-this``` and a movie name (e.g. ```movie-this Rush Hour 2```)  to output the following information to your bash window:
    ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
    ```
(images/movie-this.png)

## Technology
The [Axios npm package](https://www.npmjs.com/package/axios) was used to send requests to the [Bands in Town](http://www.artists.bandsintown.com/bandsintown-api), [Spotify](https://www.npmjs.com/package/node-spotify-api), and [OMDB APIs](http://www.omdbapi.com).

For the Bands in Town output, [Moment.js](https://www.npmjs.com/package/moment) was used to grab/manipulate/display time and date.

And lastly, the [Dotenv npm package](https://www.npmjs.com/package/dotenv) was used to hide/call API passkeys without them being available to the user.

## Role
Lead Developer