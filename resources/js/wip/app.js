
//let searchTerm = 'squirrel';
let animalName;
let imgAnime;
let imgStillness;
// // Test giphyConnect
// const giphyTest = new GiphyConnect(searchTerm);

// Init UI
const ui = new UI();

// get squirrel on DOM Load
// document.addEventListener('DOMContentLoaded', getGiphs);

function getGiphs(){
  giphyTest.getGiphs()
  .then(results => {
    // console.log(results.data[0].images.fixed_height_still.url);
    // console.log(results.data[0].images.fixed_height_still.url);
    
    ui.addAnimalCardsToPage();
  })
  .catch(err => console.log(err));
}


// Add Event Listener for Search Form
document.getElementById('btn-search4').addEventListener('click', function(e){
  
  // Get form input value
  animalName = document.getElementById('search-term').value;
  console.log("animal name is " + animalName);

  // Instantiate giphyConnect Object
  const giphyConnect = new GiphyConnect(animalName);

  // Trouble-shooting here 114 and 116
  giphyConnect.getGiphs();
  console.log("response Data below ");
  // console.log(responseData);

  // // Instantiate UI
  // const ui = new UI();

  // Validate input
  if(animalName === '') {
    // Error alert
    ui.showAlert('Please fill in Add a New Animal field', 'error');
  } else {
    // Add animal cards to page
    // ui.addAnimalCardsToPage(responseData);
    giphyConnect.getGiphs(ani);
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




