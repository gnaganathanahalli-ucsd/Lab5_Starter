// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var air_opt = document.getElementById("air-horn");
  var car_opt = document.getElementById("car-horn");
  var party_opt = document.getElementById("party-horn");
  var sound_img = document.querySelector('img[alt="No image selected]');
}



// switches image and sound to air horn
air_opt.addEventListener("input", function() {
  if (air_opt.checked) {
      sound_img.src = "assets\images\air-horn.svg";
  }
});

// switches image and sound to car horn
car_opt.addEventListener("input", function() {
  if (car_opt.checked) {
      sound_img.src = "assets\images\car-horn.svg";
  }
});

// switches image and sound to party horn
party_opt.addEventListener("input", function() {
  if (party_opt.checked) {
      sound_img.src = "assets\images\party-horn.svg";
  }
});


