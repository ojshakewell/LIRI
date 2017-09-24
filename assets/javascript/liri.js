
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
} else if (inputCommand === 'movie-this'){
	console.log('movie-this');
} else if (inputCommand === 'do-what-it-says'){
	console.log('do-what-it-says');
}

function myTweets(){
   //This will show your last 20 tweets and when they were created at in your terminal/bash window.

};


