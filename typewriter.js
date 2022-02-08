"use strict";

// let word = document.querySelector("#typewriter");
let word = document.querySelector("#typewriter").textContent;
let emptyWord = document.querySelector("#typewriter");

const sound1 = document.querySelector("#typekey1");
const sound2 = document.querySelector("#typekey2");
const sound3 = document.querySelector("#typespace");

// let maxlength;
let iterator;

window.addEventListener("load", loadFunction);
function loadFunction() {
  console.log("loadFunction");
  setUp();
}

function setUp() {
  console.log("setup");
  emptyWord.textContent = "";
  initTextLoop();
}

function initTextLoop() {
  iterator = -1;
  textLoop();
}

let myRandomSpeed;
let speedSet;

function setSpeed() {
  myRandomSpeed = Math.floor(Math.random() * 3) + 1;
  if (myRandomSpeed === 1) {
    speedSet = 500;
  } else if (myRandomSpeed === 2) {
    speedSet = 200;
  } else {
    speedSet = 100;
  }
}

document.querySelector("body").addEventListener("click", playSound);
function playSound() {
  sound1.play();
  console.log("type");
}

function textLoop() {
  iterator++;
  //   console.log(iterator);
  if (iterator < word.length) {
    document.querySelector(".typewritten").innerHTML += word.charAt(iterator);
    setSpeed();
    setTimeout(textLoop, speedSet);
    playSound();
    // textLoop();
  } else {
    console.log("im done");
  }
}
