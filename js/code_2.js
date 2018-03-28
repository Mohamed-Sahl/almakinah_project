var books = [
	{
	"id": "book_1",
	"name": "python",
	"category":"",
	"picture_url":"",
	"price": 0
	},
						{
						"id": "book_2",
						"name": "php",
						"category":"",
						"picture_url":"",
						"price": 0
						},
											{
											"id": "book_1",
											"name": "javascript",
											"category":"",
											"picture_url":"",
											"price": 0
											}
];


var albums = [
	{
	"id": "album_1",
	"name": "metallica",
	"category":"",
	"picture_url":"",
	"price": 0
	},
						{
						"id": "album_2",
						"name": "garage inc",
						"category":"",
						"picture_url":"",
						"price": 0
						},
											{
											"id": "album_1",
											"name": "hardwired",
											"category":"",
											"picture_url":"",
											"price": 0
											}
];

var movies = [
	{
	"id": "movie_1",
	"name": "casper",
	"category":"",
	"picture_url":"",
	"price": 0
	},
						{
						"id": "movie_2",
						"name": "the mask",
						"category":"",
						"picture_url":"",
						"price": 0
						},
											{
											"id": "movie_1",
											"name": "home alone",
											"category":"",
											"picture_url":"",
											"price": 0
											}
];


// The below code take the input from the search bar input field and assign it
// to var searchBar.
// in the HTML file inside the form I've added an attr in the button  called 
// "onclick" this trigger the below function when the user click the search button
var searchBar = document.forms["search-bar"].querySelector("input");
var searchFunction = function() {
	var userInput = searchBar.value;
	// below code return the value of the option user selected from the 
	// drop-down menu
	var optionSelect = document.getElementById('user-select');
	var userOption = optionSelect.value;
	if (userOption === "categ") {
		for (var i = 0; i < books.length || i < movies.length || i <albums.length; i++) {
	    	if (userInput === books[i].name){
	    		alert("Search found in books");
	    		return;
	    	}
	    	else if (userInput === albums[i].name){
	    		alert("Search found in albums");
	    		return;
	    	}
	    	else if (userInput === movies[i].name) {
	    		alert("Search found in movies");
	    		return;
	    	}
    	}
	    alert("Your Search was not found");
	  	return;
	}
	else if (userOption === "books") {
	 	for (var j = 0; j < books.length; j++) {
	    	if (userInput === books[j].name){
	    		alert("Search found in books");
	    		return;
	    	}
    	}
    	alert("Your Search was not found");
  		return;
	}
	else if (userOption === "movies") {
	 	for (var k = 0; k < movies.length; k++) {
	    	if (userInput === movies[k].name){
	    		alert("Search found in movies");
	    		return;
	    	}
    	}
    	alert("Your Search was not found");
	  	return;
	}
	else if (userOption === "albums") {
	 	for (var l = 0; l < albums.length; l++) {
	    	if (userInput === albums[l].name){
	    		alert("Search found in albums");
	    		return;
	    	}
    	}
    	alert("Your Search was not found");
	  	return;
	}  
	
};

