var books = [
	{
	"id": "book_1",
	"name": "Python",
	"category":"",
	"picture_url":"images/python.jpg",
	"price": 0
	},
						{
						"id": "book_2",
						"name": "php",
						"category":"",
						"picture_url":"images/php.jpg",
						"price": 0
						},
											{
											"id": "book_3",
											"name": "JavaScript",
											"category":"",
											"picture_url":"images/javascript.jpg",
											"price": 0
											}
];


var albums = [
	{
	"id": "album_1",
	"name": "Metallica",
	"category":"",
	"picture_url":"images/metallica.jpg",
	"price": 0
	},
						{
						"id": "album_2",
						"name": "Garage Inc",
						"category":"",
						"picture_url":"images/garage_inc.jpg",
						"price": 0
						},
											{
											"id": "album_3",
											"name": "Hardwired",
											"category":"",
											"picture_url":"images/hardwired.jpg",
											"price": 0
											}
];

var movies = [
	{
	"id": "movie_1",
	"name": "Casper",
	"category":"",
	"picture_url":"images/casper.jpg",
	"price": 0
	},
						{
						"id": "movie_2",
						"name": "The Mask",
						"category":"",
						"picture_url":"images/the_mask.jpg",
						"price": 0
						},
											{
											"id": "movie_3",
											"name": "Home Alone",
											"category":"",
											"picture_url":"images/home_alone.jpg",
											"price": 0
											}
];


$(window).on('load', function(){
	addToPage();
});

function addToPage(){
	for (var i = 0; i < books.length; i++) {
		$('#book-'+[i+1]+' .name').text(books[i].name);
		$('#book-'+[i+1]+' .img').attr("src",books[i].picture_url);
	}
	for (var j = 0; j < albums.length; j++) {
		$('#album-'+[j+1]+' .name').text(albums[j].name);
		$('#album-'+[j+1]+' .img').attr("src",albums[j].picture_url);
	}
	for (var k = 0; k < movies.length; k++) {
		$('#movie-'+[k+1]+' .name').text(movies[k].name);
		$('#movie-'+[k+1]+' .img').attr("src",movies[k].picture_url);
	}

};











// $(window).on('load', function() {
// 	for (var i = 0; i < books.length; i++) {
// 		$('#book-'+[i+1]+' .name').text(books[i].name);
// 		$('#book-'+[i+1]+' .img').attr("src",books[i].picture_url);
// 	}
// 	for (var j = 0; j < books.length; j++) {
// 		$('#album-'+[j+1]+' .name').text(albums[j].name);
// 		$('#album-'+[j+1]+' .img').attr("src",albums[j].picture_url);
// 	}
// 	for (var k = 0; k < books.length; k++) {
// 		$('#movie-'+[k+1]+' .name').text(movies[k].name);
// 		$('#movie-'+[k+1]+' .img').attr("src",movies[k].picture_url);
// 	}

// });






// The below code take the input from the search bar input field and assign it
// to var searchBar.
// in the HTML file inside the form I've added an attr in the button  called 
// "onclick" this trigger the below function when the user click the search button
var searchFunction = function() {
	var searchBar = document.forms["search-bar"].querySelector("input");
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

