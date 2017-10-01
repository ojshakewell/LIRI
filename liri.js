var fs = require("fs");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var twitterCredentials = require("./assets/javascript/keys.js");

//Make it so liri.js can take in one of the following commands:
var inputCommand = process.argv[2];
var search = process.argv[3];

if (inputCommand === 'my-tweets'){
  //console.log('my-tweets');
  myTweets();
} else if (inputCommand === 'spotify-this-song'){
  //console.log('spotify-this-song');
  spotifyThis(search);
} else if (inputCommand === 'movie-this'){
  //console.log('movie-this');
  movieThis();
} else if (inputCommand === 'do-what-it-says'){
  //console.log('do-what-it-says');
  doThis();
};

function myTweets(){
  //At the top of the 'liri.js' file, write the code you need to grab the data from keys.js. 
  //Then store the keys in a variable.
  //This will show your last 20 tweets and when they were created at in your terminal/bash window. 
  var client = new Twitter({
    consumer_key: twitterCredentials.consumer_key,
    consumer_secret: twitterCredentials.consumer_secret,
    access_token_key: twitterCredentials.access_token_key,
    access_token_secret: twitterCredentials.access_token_secret
  });

  var params = {
    screen_name: "ojshakewell1"
  };

  client.get('statuses/user_timeline', {q: params.screen_name,}, function(error, tweets, response) {

  if (!error) {
    for (var i = 0; i < tweets.length; i++) {
      if (i <20){
      console.log("At " + tweets[i].created_at + ": " + params.screen_name + " Tweetethed: " + tweets[i].text);
       }
      }
    }
  });
};

function spotifyThis(song){
  //`node liri.js spotify-this-song '<song name here>'`
  var clientID = "25cb26defd4042a1b89cd1a3b42b5b83"
  var clientSecret = "dea0d19c9fae4865b01fc20f1f4f02e5"

  var spotify = new Spotify({
    id: clientID,
    secret: clientSecret
  });

  if(!song === true){
    song = 'ace of base the sign'
  }

  spotify.search({ type: 'track', query: song }, function(err, data) {
      if (err) {
       return console.log('Error occurred: ' + err);
      }
      console.log("artist: " + data.tracks.items[0].artists[0].name);
      console.log("album: " + data.tracks.items[0].album.name);
      console.log("song: " + data.tracks.items[0].name);
      console.log("url: " + data.tracks.items[0].preview_url);
  });
};

function movieThis(){
  // Basic Node application for requesting data from the OMDB website
  var apiKey = "40e9cece";

  if(!search === true){
    search = "Mr. Nobody"
  }
  // We then run the request module on a URL with a JSON 
  request("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=" + apiKey , function(error, response, body) {

    // If there were no errors and the response code was 200 (i.e. the request was successful)...
    if (!error && response.statusCode === 200) {
      //* This will output the following information to your terminal/bash window:
      console.log("Title of the movie: " + JSON.parse(body).Title);
      console.log("Year the movie came out: " + JSON.parse(body).Year);
      console.log("IMDB Rating of the movie: " + JSON.parse(body).Ratings[0].value);
      console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].value);
      console.log("Country where the movie was produced: " + JSON.parse(body).Country);
      console.log("Language of the movie: " + JSON.parse(body).Language);
      console.log("Plot of the movie: " + JSON.parse(body).Plot);    
      console.log("Actors in the movie: " + JSON.parse(body).Actors);
    }
  });
};

//4. `node liri.js do-what-it-says`
//* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
function doThis(){
  fs.readFile("./random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }

    var dataArr = data.split(",");
    var command = dataArr[0].toString();
    var search = dataArr[1];

    if (command === 'spotify-this-song'){
      spotifyThis(search);
    }
  });
};