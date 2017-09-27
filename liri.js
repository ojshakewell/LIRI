
//At the top of the 'liri.js' file, write the code you need to grab the data from keys.js. 
//Then store the keys in a variable.
var fs = require("fs");
var request = require("request");

var twitterCredentials = require("./assets/javascript/keys.js");
var Twitter = require("twitter");


//Make it so liri.js can take in one of the following commands:
var inputCommand = process.argv[2];

if (inputCommand === 'my-tweets'){
  console.log('my-tweets');
  myTweets();
} else if (inputCommand === 'spotify-this-song'){
  console.log('spotify-this-song');
  spotifyThis();
} else if (inputCommand === 'movie-this'){
  console.log('movie-this');
  movieThis();
} else if (inputCommand === 'do-what-it-says'){
  console.log('do-what-it-says');
  doThis();
};

function myTweets(){
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

function spotifyThis(){
  console.log("spotify here")
//`node liri.js spotify-this-song '<song name here>'`
  var clientID = "25cb26defd4042a1b89cd1a3b42b5b83"
  var clientSecret = "dea0d19c9fae4865b01fc20f1f4f02e5"

/*   * This will show the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
   * You will utilize the [node-spotify-api]9867535994) package in order to retrieve song information from the Spotify API.
   
   * Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
   
   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api). See the */
};

function movieThis(){
  // Basic Node application for requesting data from the OMDB website
  var title = process.argv[3];

  var apiKey = "40e9cece";

  if(!title === true){
    title = "Mr. Nobody"
  }

  // We then run the request module on a URL with a JSON 
  request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=" + apiKey , function(error, response, body) {

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

function doThis(){
  console.log("do it here")
/*4. `node liri.js do-what-it-says`
   
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     * Feel free to change the text in that document to test out the feature for other commands.*/
};


