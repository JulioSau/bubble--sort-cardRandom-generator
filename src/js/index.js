/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let symbols = ["&clubs;", "&spades;", "&hearts;", "&diams;"];
  let cardLetter = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let symbolRandom = Math.floor(Math.random() * symbols.length);
  let letterRandom = Math.floor(Math.random() * cardLetter.length);

  let newLetter = document.querySelector("#letter");
  newLetter.innerHTML = cardLetter[letterRandom];

  let newSymbol = document.querySelectorAll("#icon");
  newSymbol[0].innerHTML = symbols[symbolRandom];
  newSymbol[1].innerHTML = symbols[symbolRandom];

  if (
    newSymbol[0].innerHTML == "\u2665" ||
    newSymbol[0].innerHTML == "\u2666"
  ) {
    newSymbol[0].style.color = "red";
    newSymbol[1].style.color = "red";
    newLetter.style.color = "red";
  }
};
