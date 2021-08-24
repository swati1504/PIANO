var C4 = new Audio("C4.mp3");
var Db4 = new Audio("Db4.mp3");
var D4 = new Audio("D4.mp3");
var Eb4 = new Audio("Eb4.mp3");
var E4 = new Audio("E4.mp3");
var F4 = new Audio("F4.mp3");
var Gb4 = new Audio("Gb4.mp3");
var G4 = new Audio("G4.mp3");
var Ab4 = new Audio("Ab4.mp3");
var A4 = new Audio("A4.mp3");
var Bb4 = new Audio("Bb4.mp3");
var B4 = new Audio("B4.mp3");
var C5 = new Audio("C5.mp3");
var Db5 = new Audio("Db5.mp3");
var D5 = new Audio("D5.mp3");
var Eb5 = new Audio("Eb5.mp3");
var E5 = new Audio("E5.mp3");

const arr1 = [C4,Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4 , C5, Db5, D5, Eb5,E5];

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

const C4Key = document.querySelector(".C4-key");
const Db4Key = document.querySelector(".Db4-key");
const D4Key = document.querySelector(".D4-key");
const Eb4Key = document.querySelector(".Eb4-key");
const E4Key = document.querySelector(".E4-key");
const F4Key = document.querySelector(".F4-key");
const Gb4Key = document.querySelector(".Gb4-key");
const G4Key = document.querySelector(".G4-key");
const Ab4Key = document.querySelector(".Ab4-key");
const A4Key = document.querySelector(".A4-key");
const Bb4Key = document.querySelector(".Bb4-key");
const B4Key = document.querySelector(".B4-key");
const C5Key = document.querySelector(".C5-key");
const Db5Key = document.querySelector(".Db5-key");
const D5Key = document.querySelector(".D5-key");
const Eb5Key = document.querySelector(".Eb5-key");
const E5Key = document.querySelector(".E5-key");

const arr2 =[C4Key, Db4Key, D4Key, Eb4Key, E4Key, F4Key, Gb4Key,  G4Key, Ab4Key, A4Key, Bb4Key, B4Key ,C5Key, Db5Key, D5Key, Eb5Key,E5Key];


for(let i=0;i<17;i++)
{
    const play = () => {
      playSound(arr1[i]);
      arr2[i].classList.add("active");
      setTimeout(() => arr2[i].classList.remove("active"), 200);
    };
    arr2[i].addEventListener("click", play);

}
