
//At the top of the 'liri.js' file, write the code you need to grab the data from keys.js. 
//Then store the keys in a variable.

var fs = require("fs");

//Make it so liri.js can take in one of the following commands:
var inputCommand = process.argv[2];
//console.log(inputCommand);

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
	var request = require("request");

	var resourceURL = "https://api.twitter.com/1.1/search/tweets.json"

console.log("debug point 1")

	request(resourceURL, function(error, response, body){
		console.log('error: ',error);

		if (!error && response.statusCode === 200) {

			console.log('statusCode: ',request && response.statusCode === 200);

			console.log('body: ',body);

			console.log("display tweets here: " + JSON.parse(body).text);
		}
	});
};

function spotifyThis(){
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
   console.log("spotify here")
};

function movieThis(){
/*`node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

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

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
     
     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
     
     * It's on Netflix!
   
   * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `40e9cece`.
	*/
	console.log("movie here")
};

function doThis(){
	console.log("do it here")
/*4. `node liri.js do-what-it-says`
   
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     * Feel free to change the text in that document to test out the feature for other commands.*/
};


