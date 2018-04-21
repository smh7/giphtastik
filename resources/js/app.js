$(document).ready(function() {

  $(".animal-button").on("click", function(){

    // console.log("search term " + $(this).attr("value"));

    var searchTerm = $(this).attr("value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=oj1rH7fHQGbu1lwdH0WZcAmP0c7lI23V&q=" + searchTerm + "&limit=10"

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        // response.data.images
        for (i = 0; i < response.data.length; i++){
              // console.log(response); // for debugging
              //console.log(response.data[i].url); // for debugging

          var giphyResponse = {stURL: response.data[i].images.fixed_height_still.url,
                                anURL: response.data[i].images.fixed_height.url}
          
          var animalImage = $("<img>");
          animalImage.attr("src", giphyResponse.anURL);
          animalImage.attr("srcA", giphyResponse.anURL);
          animalImage.attr("srcS", giphyResponse.stURL);
          animalImage.attr("alt", "returned image");
          animalImage.attr("value", "animated");
          animalImage.attr("class", "ajaxImage");
          animalImage.attr("title", "you chose: " + searchTerm);
          $("#images").prepend(animalImage);
          // console.log(giphyResponse);
            
        } // end of for loop

        $(".ajaxImage").on("click", function(){
          
          // console.log("the click is resgistering");
          // console.log($(this).attr("value"));
          if ($(this).attr("value") == "animated"){
            $(this).attr("src", $(this).attr("srcS"));
            $(this).attr("value", "still");
            // console.log("Click when animated");
          } else {
            $(this).attr("src", $(this).attr("srcA"));
            $(this).attr("value", "animated");
            // console.log(this);
          }
      
        }); // end of .ajaxImage click event

      }); // end of .then portion of ajax call

  }); // end of .animal-button click event

  

  $("#btn-search").on("click", function() {

    // console.log("you clicked the button");
    var animal = $("#search-term").val();
    console.log(animal);

    // Attach variable to parent of buttons at top of page
    // var pageSectionButtons = document.querySelector('.btn-group');
    
    // build Button
    var animalButton = document.createElement('button');
    animalButton.className = "btn btn-secondary animal-button p-3";
    animalButton.innerHTML = `${animal}`;
    
    // Add Button to page
    // pageSectionButtons.appendChild(animalButton);
    $("#newAnimals").prepend(animalButton);
    
  }); // end of click event for search button

  document.getElementById('newAnimals').addEventListener('click', function (e) {

    console.log(e.target.innerHTML);
    
  
      
    e.preventDefault();
    // console.log("search term " + $(this).attr("value"));

    var searchTerm = e.target.innerHTML;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=oj1rH7fHQGbu1lwdH0WZcAmP0c7lI23V&q=" + searchTerm + "&limit=10"

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        // response.data.images
        for (i = 0; i < response.data.length; i++){
              // console.log(response); // for debugging
              //console.log(response.data[i].url); // for debugging

          var giphyResponse = {stURL: response.data[i].images.fixed_height_still.url,
                                anURL: response.data[i].images.fixed_height.url}
          
          var animalImage = $("<img>");
          animalImage.attr("src", giphyResponse.anURL);
          animalImage.attr("srcA", giphyResponse.anURL);
          animalImage.attr("srcS", giphyResponse.stURL);
          animalImage.attr("alt", "returned image");
          animalImage.attr("value", "animated");
          animalImage.attr("class", "ajaxImage");
          animalImage.attr("title", "you chose: " + searchTerm);
          $("#images").prepend(animalImage);
          // console.log(giphyResponse);
            
        } // end of for loop

        $(".ajaxImage").on("click", function(){
          
          // console.log("the click is resgistering");
          // console.log($(this).attr("value"));
          if ($(this).attr("value") == "animated"){
            $(this).attr("src", $(this).attr("srcS"));
            $(this).attr("value", "still");
            // console.log("Click when animated");
          } else {
            $(this).attr("src", $(this).attr("srcA"));
            $(this).attr("value", "animated");
            // console.log(this);
          }
      
        }); // end of .ajaxImage click event

      }); // end of .then portion of ajax call

  })

  document.getElementById('btn-clear').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('images').innerHTML = '';
  })

}); // end of document.ready 

