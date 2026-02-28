// sounds.js
export const introMusic = new Audio("./assets/audio/openmusic.mp3");
introMusic.loop = true;
introMusic.volume = 0.3;

const hoverSound = new Audio("./assets/audio/hoverCard.mp3");
const chooseSound = new Audio("./assets/audio/choose.mp3");

hoverSound.volume = 0.6;
chooseSound.volume = 0.7;


export function unlockSounds() {
  hoverSound.play().then(() => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  });

  chooseSound.play().then(() => {
    chooseSound.pause();
    chooseSound.currentTime = 0;
  });
}

export function playHover() {
  hoverSound.currentTime = 0;
  hoverSound.play();
}

export function playChoose() {
  chooseSound.currentTime = 0;
  chooseSound.play();
}


