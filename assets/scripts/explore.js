// explore.js
window.addEventListener('DOMContentLoaded', init);
var utterThis = new SpeechSynthesisUtterance();


function init(){
  const synth = window.speechSynthesis;

  var faceIcon = document.querySelector('img[alt="Smiling face"]');
  var inputTxt = document.getElementById("text-to-speak");
  var playText = document.querySelector('button');


  changeFace(synth, faceIcon);
  textToSpeech(synth, inputTxt, playText, faceIcon);


}

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }

  var selectedVoice;
  let dropdownListVoices = document.getElementById("voice-select");
  dropdownListVoices.onchange = (ev) =>{
    selectedVoice = dropdownListVoices.value;

    for (let i = 0; i < voices.length ; i++) {
      var totalVar = voices[i].name + " (" + voices[i].lang + ")";
      if (totalVar === selectedVoice) {
        utterThis.voice = voices[i];
      }
    }

  }  

  
}

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function changeFace(synth,faceIcon){
  if(synth.speaking){
    faceIcon.src = "assets/images/smiling-open.png";
  }
}

function textToSpeech(synth, inputTxt, playText, faceIcon){
  utterThis.volume = 1;
  utterThis.rate = 1;
  utterThis.pitch = 1;
  playText.addEventListener('click', (event) => {
    utterThis.text = inputTxt.value;
    
    synth.speak(utterThis);
    changeFace(synth, faceIcon);
  });
  utterThis.onend = (event) => {
    faceIcon.src = "assets/images/smiling.png"
  }

}