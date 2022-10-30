// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

var air_opt = document.getElementById("air-horn");
var car_opt = document.getElementById("car-horn");
var party_opt = document.getElementById("party-horn");
var aud = document.getElementsByClassName("hidden");

const buttons = document.querySelectorAll("button");


// switches image and sound to air horn
air_opt.addEventListener("input", function() {
  if (air_opt.checked) {
      aud.src = "assets\audio\air-horn.mp3";
  }
});

// switches image and sound to car horn
car_opt.addEventListener("input", function() {
  if (car_opt.checked) {
      aud.src = "assets\audio\car-horn.mp3";
  }
});

// switches image and sound to party horn
party_opt.addEventListener("input", function() {
  if (party_opt.checked) {
      aud.src = "assets\audio\party-horn.mp3";
  }
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    aud.play();
  });
});


