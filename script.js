const quoteContainerEl = document.getElementById("quote-container");
const quoteEl = document.getElementById("quote");
const hinaganaEl = document.getElementById("hinagana");
const meaningEl = document.getElementById("meaning");
const twitterBtnEl = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loaderEl = document.getElementById("loader");
let quote;

function showLoadingSpinner() {
  quoteContainerEl.hidden = true;
  loaderEl.hidden = false;
}

function hideLoadingSpinner() {
  loaderEl.hidden = true;
  quoteContainerEl.hidden = false;
}

//show new quote
function newQuote() {
  showLoadingSpinner();

  setTimeout(() => {
    updateQuote();
    hideLoadingSpinner();
  }, 600);
}

function updateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length) + 1;
  quote = quotes[randomIndex];

  quoteEl.textContent = quote.text;
  hinaganaEl.textContent = quote.hinagana;
  meaningEl.textContent = quote.meaning;

  if (quote.text.length > 50) quoteEl.classList.add("long-quote");
  else quoteEl.classList.remove("long-quote");
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
  window.open(twitterUrl, "_blank");
}

// Event Listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtnEl.addEventListener("click", tweetQuote);

newQuote();
