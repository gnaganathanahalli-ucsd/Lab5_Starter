// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  var horn = document.getElementsByName("horn");
  var hornSelected = horn.options[horn.selectedIndex].value;
  function hornChosen(hornSelected);
}

function hornChosen(hornSelected){
  if(hornSelected == 'air-horn'){
    console.log("hello people");
    alert("air-horn selected");
  }
}











// 1. access which option is chosen
// 2. change image + sound
// 3. activate button to play sound
// 4. have confetti go off for particular option
// 5. access current volume level
// 6. change icon based on volume level
// 7. change volume based on volume level
// 8. test that it all works
// 9. push to github
// 10. check on github pages that it all works