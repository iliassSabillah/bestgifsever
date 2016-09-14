$(document).ready(function(){
  	// console.log($('body'));
  	// var jquery = require('jquery');
	var giphyApiKey =  'dc6zaTOxFJmzC';

	var giphyUrl	=  'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=';
  	// console.log('hello');
    $("#form").on("submit", function(event) {
    	//you can also use .submit(callback)
    	console.log('clicked search');
        // Lookup `preventDefault`; it stops the browser's default action,
        // which is to make a synchronous submission of the form.
        // http://api.jquery.com/category/events/event-object
        event.preventDefault();

        // As a shortcut, when jQuery calls your event handler, it sets
        // `this == event.currentTarget`.
        var input= $(this).serializeArray()[0].value;
        console.log(input);
        var formData = $(event.currentTarget).serializeArray();
        // var first = formData[0].value;
        // var search = $('searchGiphy').val();
        // console.log(formData);
        function searchGiphy(data) {
          // console.log('hello giphy');
          var giphy= data.data[0].images.original.url;
          console.log(giphy)
          $('iframe').attr('src',giphy);

     
        }
        $.ajax({
          url: 'http://api.giphy.com/v1/gifs/search?q='+input+'&api_key=' + giphyApiKey,
          success: searchGiphy
      })
  	});
})



//Search 

// $('#form').on('submit', getSearch)

// function getSearch(event) {
//     event.preventDefault();
//     var input = $(this).serializeArray()[0].value
//     var searchData = input.split(" ").join("+")

// $.ajax({ url: "http://api.giphy.com/v1/gifs/search?q=" +searchData+ "&api_key=dc6zaTOxFJmzC" ,
//   success: display})

// }

// function display (giphyData){
//   var gif = giphyData.data[0].images.original.url
//   // $("img").attr("src", gif)
//   $('iframe').attr('src',gif);
// }