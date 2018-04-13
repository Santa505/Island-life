function myPage () {
    var myScenes = [
        margaritaville
      ];
     var randomPage = myScenes;
     console.log(randomPage);
    return randomPage
}

myPage ()

  function cheeseburger(){
    var song = "audio/cheeseburger.m4a";
    addSongToDom(song);
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/patrick.gif";
    hula.classList.add("bounceInLeft", "animated", "bounce", "gif-size", "gif-postion")
    let cheeseburger = ".cheeseburger";
    playSound(cheeseburger);
  }

  function margaritaville(){
    var song = "audio/margaritaville.m4a";
    addSongToDom(song);
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/plainHulaGirl.gif";
    hula.classList.add("bounceInLeft", "animated", "bounce", "gif-size", "gif-postion")
    playSound();
  }

function pina(){
    var song = "audio/pina.m4a"
    addSongToDom(song);
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/fathippo.gif";
    hula.classList.add("bounceInLeft", "animated", "bounce", "gif-size", "gif-postion");
    playSound();
  }

function playSound() {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}


function addSongToDom(song){
  var audioTag = document.createElement("audio");
  audioTag.src = song;
  let bodyTag = document.querySelector('body');
  bodyTag.append(audioTag);
}

//   function playSound() {
//     return randomPage
//   }

//   playsound ();



// playSound()
// function playSound() {
//     const audio = document.querySelector(".cheeseburger");
//     // const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     const img = document.querySelector("img")
//     if (!audio) return;

//     img.classList.add('sound');
//     audio.currentTime = 0;
//     audio.play();
// }
