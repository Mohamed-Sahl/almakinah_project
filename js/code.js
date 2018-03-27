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


$(function(){
	$("#search").submit(function(e) { 
        var value = $("#search-input").val();
        e.preventDefault();
        for (var i = 0; i < books.length; i++) {
        	if (value === books[i].name){
        		alert("Search found in books");
        		return;
        	}
        }
        for (var i = 0; i < movies.length; i++) {
        	if (value === movies[i].name){
        		alert("Search found in movies");
        		return;
        	}
        }
        for (var i = 0; i < albums.length; i++) {
        	if (value === albums[i].name){
        		alert("Search found in albums");
        		return;
        	}
        }
        alert("search not found");		
    });
});