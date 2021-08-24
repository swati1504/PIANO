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

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

// C4
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
  playSound(C4);
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
  playSound(Db4);
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
  playSound(D4);
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
  playSound(Eb4);
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
  playSound(F4);
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  playSound(Gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
  playSound(G4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
  playSound(Ab4);
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
  playSound(A4);
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
  playSound(Bb4);
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
  playSound(B4);
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
  playSound(C5);
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
  playSound(Db5);
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
  playSound(D5);
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
  playSound(Eb5);
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
  playSound(E5);
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", playE5);

