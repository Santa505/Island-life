function cheeseburger(){
  var gifImgTag = document.querySelector("#hula");
  gifImgTag.src = "img/patrick.gif";
  hula.classList.add("bounceInLeft animated bounce gif-size gif-postion")
  let cheeseburger = ".cheeseburger";
  playSound(cheeseburger);
}

function margaritaville(){

  var gifImgTag = document.querySelector("#hula");
  gifImgTag.src = "img/plainHulaGirl.gif";

  hula.classList.add("bounceInLeft animated bounce gif-size gif-postion")

  let margaritaville = ".margaritaville";
  playSound(margaritaville);
}

function pina(){
  var gifImgTag = document.querySelector("#hula");
  gifImgTag.src = "img/fathippo.gif";
  hula.classList.add("bounceInLeft animated bounce gif-size gif-postion");
  let pina = ".pina";
  playSound(pina);
}

function playSound(song) {
    const audio = document.querySelector(song);
    if (!audio) return;
    img.classList.add('sound');
    audio.currentTime = 0;
    audio.play();
}

// // play sound template function
// function playSound(display) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// }
