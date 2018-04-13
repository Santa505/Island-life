var hula = document.querySelector("#hula")

hula.classList.add("bounceInLeft")
console.log(hula.style)


// // play sound template function
// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// }