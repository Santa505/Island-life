function myPage (randomPage) {
    var myScenes = [
        cheeseburger,
        pina,
        margaritaville
      ];
    var randomPage = myScenes[getRandomInt(myScenes.length)]();
    return randomPage;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

myPage ()

function cheeseburger(){
    var song = "audio/cheeseburger.m4a";
    addSongToDom(song);
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/patrick.gif";
    hula.classList.add("slideInUp", "patrickAnimated", "bounce", "gif-size", "gif-postion")
    let cheeseburger = ".cheeseburger";
    playSound(cheeseburger);
  }

  function margaritaville(){
    var song = "audio/margaritaville.m4a";
    addSongToDom(song);
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/fathippo.gif";
    hula.classList.add("fadeInDownBig", "animated", "rubberBand", "gif-size", "gif-postion")
    playSound();
  }

  function pina(){
    var song = "audio/pina.m4a"
    addSongToDom(song);
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/dancingcarlton.gif";
    hula.classList.add("bounceInLeft", "animated", "bounce", "gif-size", "gif-postion");
    playSound();
  }

  function playSound() {
    var audio = document.querySelector('audio');
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
