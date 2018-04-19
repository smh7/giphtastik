class UI {
addAnimalCardsToPage(results) {
  // Create a reference to the place on the page where we'll put cards
  const pageSectionCards = document.getElementById('images');
  // Create Card
  const animalCardDiv = document.createElement('div');

  console.log('Search Term is ' + searchTerm);
  console.log(results.data[0].images.fixed_height_still.url);
 let imgSrc = results.data[0].images.fixed_height_still.url;
 let imgSrcNoProtocol = imgSrc.replace(/^https?\:\/\//i, "");
 console.log(imgSrcNoProtocol);
  // currently hard-coding 3 until can look at response object
  
    // added into the card parent element a class = searchTerm the animal name
      // did this so that I can reference the class and grab all the cards of that type
      animalCardDiv.innerHTML =`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src='http://${imgSrcNoProtocol}' alt="animalImg">
          <div class="card-body">
            <h5 id="animalName" class="card-title">Card Title</h5>   
          </div>
      </div>
      `
    // Update UI
    pageSectionCards.appendChild(animalCardDiv);
    

}
}