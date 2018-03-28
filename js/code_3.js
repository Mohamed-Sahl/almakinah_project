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

// the below code monitor the search input by every character the user
// input and search with its value
var searchBar = document.forms["search-bar"].querySelector("input");
searchBar.addEventListener('keyup', function(e){
	var userInput = e.target.value;
	// a bug in the below for loops is the condition of the i,
	// which depends only on the length of the books
	alert("inside");
	for (var i = 0; i < books.length || i < movies.length || i <albums.length; i++) {
    	if (userInput === books[i].name){
    		alert("Search found in books from within books value");
    		return;
    	}
    	else if (userInput === albums[i].name){
    		alert("Search found in books from within albums value");
    		return;
    	}
    	else if (userInput === movies[i].name) {
    		alert("Search found in books from within albums value");
    		return;
    	}
    }
    alert("Your Search not found");
});