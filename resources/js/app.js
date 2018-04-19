
let searchTerm = 'squirrel';
// Test giphyConnect
const giphyTest = new GiphyConnect(searchTerm);

// Init UI
const ui = new UI();

// get squirrel on DOM Load
document.addEventListener('DOMContentLoaded', getGiphs);

function getGiphs(){
  giphyTest.getGiphs()
  .then(results => {
    // console.log(results.data[0].images.fixed_height_still.url);
    console.log(results.data[0].images.fixed_height_still.url);
    
    ui.addAnimalCardsToPage(results);
  })
  .catch(err => console.log(err));
}