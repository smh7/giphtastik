
// let searchTerm = 'squirrel';
// let animalName;
// let imgAnime;
// let imgStillness;
// // let animalName;
// // Test giphyConnect

// const giphyTest = new GiphyConnect(searchTerm);

// Init UI
// const ui = new UI();

// get squirrel on DOM Load
// document.addEventListener('DOMContentLoaded', getGiphs);



//  Add Event Listener for Search Form
document.getElementById('btn-search4').addEventListener('click', function(e){
  
  // Get form input value
  animalName = document.getElementById('search-term').value;
  console.log("animal name is " + animalName);

  // Instantiate giphyConnect Object
  const giphyTest = new GiphyConnect(animalName);

  // Instantiate UI
  const ui = new UI();

  // Validate input
  if(animalName === '') {
    // Error alert
    ui.showAlert('Please fill in Add a New Animal field', 'error');
  } else {
    // Add animal cards to page
    giphyTest.getGiphs(animalName)
    .then(results => {
      console.log(results.data[0].images.fixed_height_still.url);
      console.log(results.data[0].images.fixed_height_still.url);
      
      // ui.addAnimalCardsToPage(results);
      ui.addAnimalCardsToPage(results);
    
      ui.addAnimalButtonToPage(animalName);
    })
    .catch(err => console.log(err));
    // ui.addAnimalCardsToPage(responseData);
    
  }
  // Clear Fields
  ui.clearFields();

   e.preventDefault;
 })



 // Add Event Listener for Buttons in top row existing
document.getElementById('btn-group').addEventListener('click', function(e) {
  // // get the animalName
  console.log(e.target.value);
  animalName = e.target.value;
// Instantiate giphyConnect Object
const giphyTest = new GiphyConnect(animalName);

// Instantiate UI
const ui = new UI();

  // Add animal cards to page
  giphyTest.getGiphs(animalName)
  .then(results => {
    console.log(results.data[0].images.fixed_height_still.url);
    console.log(results.data[0].images.fixed_height_still.url);
    
    // ui.addAnimalCardsToPage(results);
    ui.addAnimalCardsToPage(results);

  })
  .catch(err => console.log(err));
  // ui.addAnimalCardsToPage(responseData);
 

 e.preventDefault;
})
  



// Add Event Listener for Card Play - Dynamic
document.getElementById('images').addEventListener('click', function(e){
  // const idOfTargetClicked = event.target.id.toString();
  // ui.changeImage(idOfTargetClicked);
  // const parenID = 
  // console.log(event.target.parentNode.parentNode.closest('#card-image'));
//  let imgToChange = document.querySelector('#card-image');
console.log("this is " + e.target.closest('#playAnimal'));
 let imgtoChange = document.getElementById('card-image');
 imgtoChange.src = `http://${imgAnimatedNoProtocol}`;
 console.log(imgtoChange.src);
 console.log(ui.addAnimalButtonToPage.imgAnimatedNoProtocol);


}
)

// document.querySelector('#playAnimal').addEventListener('click', function(e) {
//   console.log("this is " + e.target.closest('#playAnimal'));
//  let imgtoChange = document.getElementById('card-image');
//  imgtoChange.src = `http://${imgAnimatedNoProtocol}`;
//  console.log(imgtoChange.src);
//  console.log(ui.addAnimalButtonToPage.imgAnimatedNoProtocol);

// })


// Add Event Listener for Card Pause - Dynamic



// Add Event Listener for Minimize Card - Dynamic


// Add Event Listener for clear
document.getElementById('btn-clear').addEventListener('click', function(e) {
  document.getElementById('images').innerHTML = '';
})

function getGiphs(searchTerm){
  giphyTest.getGiphs(searchTerm)
  .then(results => {
    console.log(results.data[0].images.fixed_height_still.url);
    console.log(results.data[0].images.fixed_height_still.url);
    
    // ui.addAnimalCardsToPage(results);
    ui.addAnimalCardsToPage(results);
    
    ui.addAnimalButtonToPage(searchTerm);
  })
  .catch(err => console.log(err));
}

