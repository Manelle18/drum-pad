window.addEventListener('keydown', playSound);

// To add!!!
// window.addEventListener('click', playSound); play sound on click

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 
function bearbox(){
    function simulatekey(keyCode){
        const event = new KeyboardEvent('keydown',{keyCode});
        keyCode.play();
    }
}
function playBeat(beat, timeOut) {
    let sound = document.querySelector(`audio[data-key="${beat}"]`);
    return new Promise((resolve, reject) => {
      if (timeOut != null) {
        setTimeout(() => {
          sound.currentTime = 0;
          sound.play();
          resolve();
        }, timeOut);
      } else {
        sound.currentTime = 0;
        sound.play();
        resolve();
      }
    });
  }