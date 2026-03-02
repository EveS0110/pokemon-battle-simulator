// assets/js/sounds.js

export const introMusic = new Audio("./assets/audio/openmusic.mp3");
export const battleMusic = new Audio("./assets/audio/WhatsApp Audio 2026-02-23 at 19.59.21.mp3");

introMusic.loop = true;
battleMusic.loop = true;
introMusic.volume = 0.3;
battleMusic.volume = 0.5;

const hoverSound = new Audio("./assets/audio/hoverCard.mp3");
const chooseSound = new Audio("./assets/audio/choose.mp3");

hoverSound.volume = 0.4;
chooseSound.volume = 0.7;

// Função para desbloquear áudio (essencial para mobile e PC)
export function unlockSounds() {
    [introMusic, battleMusic, hoverSound, chooseSound].forEach(s => {
        s.muted = false;
    });

    [hoverSound, chooseSound, battleMusic].forEach(sound => {
        sound.play().then(() => {
            sound.pause();
            sound.currentTime = 0;
        }).catch(() => {});
    });
}

export function playHover() {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
}

export function playChoose() {
    chooseSound.currentTime = 0;
    chooseSound.play().catch(() => {});
}

export function startBattleMusic() {
    // Só inicia se a música de batalha NÃO estiver tocando
    if (battleMusic.paused) {
        introMusic.pause();
        introMusic.currentTime = 0;
        
        battleMusic.currentTime = 0;
        battleMusic.play().catch(e => console.error("Erro ao tocar batalha:", e));
    }
}

export function resetSons() {
    battleMusic.pause();
    battleMusic.currentTime = 0;
    introMusic.pause();
    introMusic.currentTime = 0;
    introMusic.play().catch(() => {});
}

// assets/js/sounds.js
export function stopBattleMusic() {
    battleMusic.pause();
    battleMusic.currentTime = 0;
}