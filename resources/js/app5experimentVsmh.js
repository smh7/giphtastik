// Global for trouble-shooting
let responseTrblShoot;

// GiphyConnect Constructor
class GiphyConnect {
  constructor(animalName){
    this.searchTerm = animalName;
    this.apiKey = 'gyzIIB8PNmqPRbcZ1jb53mDcQSoM7chn';
    this.numberToReturn = 3;
  }
 
  async getGiphs() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${numberToReturn}`);

    const responseData = await response.data.json();
    // Trouble-shooting with update of global
    responseTrblShoot = responseData;
    return responseData;
  }
  
}

function getGiphs(){
  giphyConnect.getGiphs()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}

// UI Constructor
function UI() {}

// Add cards for returned Images to page
UI.prototype.addAnimalCardsToPage = function(responseData) {
  // Create a reference to the place on the page where we'll put cards
  const pageSectionCards = document.getElementById('images');
  // Create Cards
  let output = '';
  var play = '\uf04b';
  var pause = 'fas fa-pause';
  var close = '\uf04b';
  // currently hard-coding 3 until can look at response object
  for(i = 0; i = 3; i++) {
    var giphyResponse = {stURL: response.data[i].images.fixed_height_still.url,
      anURL: response.data[i].images.fixed_height.url}
  
      // added into the card parent element a class = searchTerm the animal name
      // did this so that I can reference the class and grab all the cards of that type
      output +=`
      <div class="card ${searchTerm}" style="width: 18rem;">
        <img id="animalImg" class="card-img-top" src="${response.data[i].images.fixed_height_still.url}" alt="animalImg">
          <div class="card-body">
            <h5 id="animalName" class="card-title">${searchTerm}</h5>
        
            <button id="pauseAnimal" type="button" class="${pause} btn btn-light"><img src="resources/img/media-pause.svg" alt="Pause Media" text-whitearia-hidden="true"> </button> 
            <button id="playAnimal" type="button" class="${play} btn btn-light btn-search"><img src="resources/img/media-play.svg" alt="Play Media" text-whitearia-hidden="true"> </button> 
            <button id="closeAmial" type="button" class="${close} btn btn-light" ><img src="resources/img/x.svg" alt="Close"> </button> 
          </div>
      </div>
      `
    // Update UI
    document.getElementById('images').innerHTML = output;
    }
  }

UI.prototype.addAnimalButtonToPage = function(animal){
  // Needed to update html file div.container to have id = button-rows
  const pageSectionButtons = document.getElementById('button-rows');
  // build Button
  const animalButton = document.createElement('button');
  animalButton.className = "btn btn-secondary animal-button";
  animalButton.innerHTML = `${animal}`;
  // Add Button to page
  pageSectionButtons.appendChild(animalButton);
  // Clear bottom of page
  ui.minimizeCardClearCards();
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add Classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#search-form'); 
  // Insert alert
  container.insertBefore(div, form);
  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Minimize Card Clear out cards from bottom of page
UI.prototype.minimizeCardClearCards = function(){
  // Clear bottom of page
  const outputClear = '';
  document.getElementById('images').innerHTML = outputClear;
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('search-term').value = '';
}


// Add Event Listener for Search Form
document.getElementById('btn-search4').addEventListener('click', function(e){

  // Get form input value
  const animalName = document.getElementById('search-term').value;
  console.log("animal name is " + animalName);

  // Instantiate giphyConnect Object
  const giphyConnect = new GiphyConnect(animalName);
  // Trouble-shooting here 114 and 116
  giphyConnect.getGiphs(animalName);
  console.log("response Data below ");
  console.log(responseData);

  // Instantiate UI
  const ui = new UI();

  // Validate input
  if(animalName === '') {
    // Error alert
    ui.showAlert('Please fill in Add a New Animal field', 'error');
  } else {
    // Add animal cards to page
    ui.addAnimalCardsToPage(responseData);
  }
  // Clear Fields
  ui.clearFields();

  e.preventDefault;
})



// Add Event Listener for Buttons in top row
document.getElementById('btn-group').addEventListener('click', function(e) {
  // get the animalName
  console.log(e.target.value);
  // Instantiate giphyConnect


  // Instantiate UI
  const ui = new UI();
  
})


// Add Event Listener for Card Play - Dynamic
document.getElementById('images').addEventListener('click', function(e){
  console.log(e.target);
})


// Add Event Listener for Card Pause - Dynamic



// Add Event Listener for Minimize Card - Dynamic




