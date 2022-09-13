//https://quote-garden.herokuapp.com/api/v3/quotes/random
//The Quote App will display quotes together with the quote author - that's the app
//Display a static default quote and quote author upon start of the app
//Add a button which will get a random quote from the API

const quoteBtn = document.querySelector(".quote-btn");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");

newQuote()

function newQuote(){
fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random") // Abfrage
  //Antwort in JavaScript-Obj umwandeln
  .then((response) => response.json())
  //Auswerten des umgewandelten JSON
  .then((data) => {
    quoteText.innerText = data.data[0].quoteText;
    quoteAuthor.innerText = "-"+ data.data[0].quoteAuthor;
});
quoteBtn.addEventListener("click", newQuote)
}
 

