/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let simbol = ["♦", "♥", "♠", "♣"];

  let randomNumbers = Math.floor(Math.random() * numbers.length);
  let randomSimbols = Math.floor(Math.random() * simbol.length);

  if (simbol[randomSimbols] == "♦" || simbol[randomSimbols] == "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }

  let simbolTop = document.querySelector(".top");
  let numbercard = document.querySelector(".number");
  let simbolbottom = document.querySelector(".bottom");

  simbolTop.innerHTML = simbol[randomSimbols];
  numbercard.innerHTML = numbers[randomNumbers];
  simbolbottom.innerHTML = simbol[randomSimbols];
};
