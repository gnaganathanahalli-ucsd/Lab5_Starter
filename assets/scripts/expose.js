// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  var horn_image = document.querySelector('img[alt="No image selected"]');
  var horn_sound = document.querySelector('audio');

  var buttonSound = document.querySelector('button');

  
  var volumeLevel = document.getElementById("volume");

  

  getHorn(buttonSound,horn_image, horn_sound, jsConfetti)
  volumeLevelIcons(volumeLevel, horn_sound)
  
  
  

}



function volumeLevelIcons(volumeLevel, horn_sound){
  volumeLevel.onchange = (ev) => {
    var vol  = volumeLevel.value;
    horn_sound.volume = vol / 100;
    var volumeIcon = document.querySelector('img[alt="Volume level 2"]');
    if(vol == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }else if(vol < 33 && vol > 0){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }else if(vol < 67 && vol >= 33){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }else{
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  }
  
}


function getHorn(buttonSound, horn_image, horn_sound, jsConfetti){
  let dropdownList = document.getElementById('horn-select');
  var partyHornBoolean = false;
  dropdownList.onchange = (ev) =>{
    var hornChosen = dropdownList.value;
    if(hornChosen == 'air-horn'){
      // add air-horn image
      horn_image.src = "assets/images/air-horn.svg";
      // add air-horn sound here
      horn_sound.src = "assets/audio/air-horn.mp3";
    }else if(hornChosen == 'car-horn'){
      // add car-horn image
      horn_image.src = "assets/images/car-horn.svg";
      // add car-horn sound here
      horn_sound.src = "assets/audio/car-horn.mp3";
    }else if(hornChosen == 'party-horn'){
      // add party-horn image
      horn_image.src = "assets/images/party-horn.svg";
      // add party-horn sound here
      horn_sound.src = "assets/audio/party-horn.mp3";
      partyHornBoolean = true;
    }
    
    buttonSound.addEventListener('click', (event) => {
      if(partyHornBoolean){
        horn_sound.play();
        jsConfetti.addConfetti()
        partyHornBoolean = false;
      }else{
        horn_sound.play();
      }
    });
  }

}



