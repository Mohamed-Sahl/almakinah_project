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


// This function was a result of long hours of work and my explanations
// could sound confusing, will try to make it clear as much as possible:
// I've removed the whole bootstrap col and card HTML tags
// from the rows to empty the content area, and then implemented 
// them into the addToPage function which runs as soon as the page
// loads. This function main propose is add the relevant card details
// by looping through the arrays of objects of the categories.
// I've made a for loop for every category. assigned the var cardContent.
// appended the content to the row which i gave an id depends on the
// category. 
function addToPage(){
	for (var i = 0; i < books.length; i++) {
		var cardContentBooks ='	<div class="col-4">\
									<div id="'+i+'" class="card p-4 border-0 text-center product" style="width: 18rem;">\
										<img class="card-img-top img"  alt="Card image cap"> \
									  	<div class="card-body"> \
										    <h5 class="card-title name"></h5> \
										    <p class="card-text category"></p> \
										    <a href="details.html" class="btn btn-primary price"></a> \
									  	</div>\
									</div>\
								</div>'
		$('#books').append(cardContentBooks);
		$('#'+[i]).attr("id","book-"+[i+1]);
		$('#book-'+[i+1]).addClass('book');
		$('#book-'+[i+1]+' .name').text(books[i].name);
		$('#book-'+[i+1]+' .img').attr("src",books[i].picture_url);
	}
	for (var j = 0; j < albums.length; j++) {
		var cardContentAlbums ='	<div class="col-4">\
									<div id="'+j+'" class="card p-4 border-0 text-center product" style="width: 18rem;">\
										<img class="card-img-top img"  alt="Card image cap"> \
									  	<div class="card-body"> \
										    <h5 class="card-title name"></h5> \
										    <p class="card-text category"></p> \
										    <a href="details.html" class="btn btn-primary price"></a> \
									  	</div>\
									</div>\
								</div>'
		$('#albums').append(cardContentAlbums);
		$('#'+[j]).attr("id","album-"+[j+1]);
		$('#album-'+[j+1]).addClass('album');
		$('#album-'+[j+1]+' .name').text(albums[j].name);
		$('#album-'+[j+1]+' .img').attr("src",albums[j].picture_url);
	}
	for (var k = 0; k < movies.length; k++) {
		var cardContentMovies ='	<div class="col-4">\
									<div id="'+k+'" class="card p-4 border-0 text-center product" style="width: 18rem;">\
										<img class="card-img-top img"  alt="Card image cap"> \
									  	<div class="card-body"> \
										    <h5 class="card-title name"></h5> \
										    <p class="card-text category"></p> \
										    <a href="details.html" class="btn btn-primary price"></a> \
									  	</div>\
									</div>\
								</div>'
		$('#movies').append(cardContentMovies);
		$('#'+[k]).attr("id","movie-"+[k+1]);
		$('#movie-'+[k+1]).addClass('movie');
		$('#movie-'+[k+1]+' .name').text(movies[k].name);
		$('#movie-'+[k+1]+' .img').attr("src",movies[k].picture_url);
	}	

}

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

$('#user-select').on('change', function(event) {
	event.preventDefault();
	var userSelectOption = event.target.value;
	if (userSelectOption === "categ") {
		$("#books").show();
		$("#movies").show();
		$("#albums").show();
	}
	if (userSelectOption === "books"){
		$("#books").show();
		$("#movies").hide();
		$("#albums").hide();
	}
	if (userSelectOption === "movies"){
		$("#movies").show();
		$("#books").hide();
		$("#albums").hide();
	}
	if (userSelectOption === "albums"){
		$("#albums").show();
		$("#movies").hide();
		$("#books").hide();
	}
});
