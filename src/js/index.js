/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {};

window.drawCards = function drawCards() {
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
  let spaceRandomCard = document.querySelector("#spaceRandomCard");
  spaceRandomCard.innerHTML = "";
  let newInput = document.querySelector("input").value;

  for (let i = 0; i < newInput; i++) {
    let symbolRandom = Math.floor(Math.random() * symbols.length);
    let letterRandom = Math.floor(Math.random() * cardLetter.length);
    let spaceRandomCard = document.querySelector("#spaceRandomCard");
    if (i == newInput - 1) {
      spaceRandomCard.insertAdjacentHTML(
        "afterbegin",
        `<div class="carta ml-5 bg-white col-1 mt-5">
        <div class="row pl-1">
          <p class="h1" id="icon">
            &clubs;
          </p>
        </div>
        <div class="row justify-content-center">
          <p class="letter" id="letter">
            J
          </p>
        </div>
        <div class="row justify-content-end pr-1">
          <p class="h1" id="icon">
            &clubs;
          </p>
        </div>
      </div>`
      );
    } else {
      spaceRandomCard.insertAdjacentHTML(
        "afterbegin",
        `<div class="carta ml-3 bg-white col-1 mt-5">
        <div class="row pl-1">
          <p class="h1" id="icon">
            &clubs;
          </p>
        </div>
        <div class="row justify-content-center">
          <p class="letter" id="letter">
            J
          </p>
        </div>
        <div class="row justify-content-end pr-1">
          <p class="h1" id="icon">
            &clubs;
          </p>
        </div>
      </div>`
      );
    }

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
  }
};
