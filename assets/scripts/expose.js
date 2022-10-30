// expose.js

//var hornSelectOption = document.getElementById("horn-select");


window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelectOption = document.querySelector('.horn')
}


hornSelectOption.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

/*
function playSoundButton(button){
  // when button is pressed, play correct sound
  // if hornSelect is party-horn, have confettii go off as well
};


// Volume Level Icons
function volumeAdjustment(volumeLevel){
  if(volumeLevel == 0){
    // volume-level-0 image
  }else if(volumeLevel < 33){
    // volume-level-1 image
  }else if(volumeLevel < 67){
    // volume-level-2 image
  }else{
    // volume-level-3 image
  }

};
*/