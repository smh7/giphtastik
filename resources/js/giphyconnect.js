// GiphyConnect Constructor
class GiphyConnect {
  constructor(animalName){
    this.searchTerm = animalName;
    this.apiKey = 'gyzIIB8PNmqPRbcZ1jb53mDcQSoM7chn';
    this.numberToReturn = 3;
  }
 
  async getGiphs() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${this.searchTerm}&limit=${this.numberToReturn}`);
    // Not certain whether response.json() or response.data.json()
    const responseData = await response.json();
    return responseData;
  }
  
}
