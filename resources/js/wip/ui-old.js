class UI {
addAnimalCardsToPage(results) {

  // Create a reference to the place on the page where we'll put cards
  const pageSectionCards = document.getElementById('images');
  // Create Card
  const animalCardDiv = document.createElement('div');

  console.log('Search Term is ' + animalName);

      // Store the 2 url's needed static and animated
      let imgSrc = results.data[0].images.fixed_height_still.url;
      let imgSrcNoProtocol = imgSrc.replace(/^https?\:\/\//i, "");
  
      let imgAnimated = results.data[0].images.fixed_height.url
      let imgAnimatedNoProtocol = imgAnimated.replace(/^https?\:\/\//i, "");
  
//   newFunction(imgSrcNoProtocol1);
//  console.log(imgAnimatedNoProtocol1);
  // From Steve's work on controls
  var play = '\uf04b';
  var close = '\uf04b';

  console.log(imgSrcNoProtocol);
  // Create the card
        animalCardDiv.innerHTML =`
        <div class="card m-5 ${animalName}" style="width: 18rem;">
          <img class="card-img-top" id="card-image" src='http://${imgSrcNoProtocol}' alt="animalImg" value="animated">
            <div class="card-body">
              <h5 id="animalName" class="card-title">${animalName}</h5>   
              <button id="playAnimal" type="button" class="${play} btn btn-light btn-search"><img src="resources/img/media-play.svg" alt="Play Media" text-whitearia-hidden="true"> </button> 
              <button id="pauseAnimal" type="button" class="fas fa-pause btn btn-light"><img src="resources/img/media-pause.svg" alt="Pause Media" text-whitearia-hidden="true"> </button>            
              <button id="closeAmial" type="button" class="${close} btn btn-light" ><img src="resources/img/x.svg" alt="Close"> </button> 
    
            </div>
        </div>
        `
      // Update UI
      pageSectionCards.appendChild(animalCardDiv);
      return imgAnimatedNoProtocol;
  }

  
  addAnimalButtonToPage(animal) {
    // Attach variable to parent of buttons at top of page
    const pageSectionButtons = document.querySelector('#btn-group');
    
    // build Button
    const animalButton = document.createElement('button');
    animalButton.className = `btn btn-secondary animal-button ${animal}`;
    animalButton.innerHTML = `${animal}`;
    
    // Add Button to page
    pageSectionButtons.appendChild(animalButton);
    
    // Clear bottom of page
    // ui.minimizeCardClearCards();
  }

  // Show Alert
  showAlert(message, className) {
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
  minimizeCardClearCards(){
    // Clear bottom of page
    const outputClear = '';
    document.getElementById('images').innerHTML = outputClear;
  }

  // Clear Fields
  clearFields() {
    document.getElementById('search-term').value = '';
  }

  changeImage(eventID) {
    if(eventID === "playAnimal"){
      console.log("change img source");
    }
  }

}

function newFunction(imgSrcNoProtocol) {
  ui.defineProperty(UI, 'imgSrcNoProtocol', {
    value: imgSrcNoProtocol,
    writable: true
  });
}
