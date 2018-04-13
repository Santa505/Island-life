function myPage () {
    var myScenes = [
        cheeseburger(),
        pina(),
        margaritaville()
      ];
     var randomPage = myScenes[(Math.random(3))];
    return randomPage
}

myPage ()

  function cheeseburger(){
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/patrick.gif";
    hula.classList.add("bounceInLeft", "animated", "bounce", "gif-size", "gif-postion")
    let cheeseburger = ".cheeseburger";
    playSound(cheeseburger);
  }
  
  function margaritaville(){
  
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/plainHulaGirl.gif";
  
    hula.classList.add("bounceInLeft", "animated", "bounce", "gif-size", "gif-postion")
  
    let margaritaville = ".margaritaville";
    playSound(margaritaville);
  }
  
  function pina(){
    var gifImgTag = document.querySelector("#hula");
    gifImgTag.src = "img/fathippo.gif";
    hula.classList.add("bounceInLeft", "animated", "bounce", "gif-size", "gif-postion");
    let pina = ".pina";
    playSound(pina);
  }

  function playSound(song) {
    const audio = document.querySelector(song);
    if (!audio) return;
    // img.classList.add('sound');
    audio.currentTime = 0;
    audio.play();
}
  
//   function playSound() {
//     return randomPage
//   }

//   playsound ();
  
//   play sound template function
//   function playSound(display) {
//       const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//       const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//       if (!audio) return;
  
//       key.classList.add('playing');
//       audio.currentTime = 0;
//       audio.play();
//   }
  

// var patrick = document.querySelector("#patrick")

// hula.classList.add("bounceInLeft")
// console.log(hula.style)

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
//need to add .cheeseburger-gif-postion to cheeseburger gif



// // play sound template function
// function playSound(display) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// }
