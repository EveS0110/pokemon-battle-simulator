import createModal from "./createModal.js";
import viewPokes from "./viewPokes.js";
import listPokescard from "./listPokeCard.js"

export const introMusic = new Audio("assets/audio/openmusic.mp3");
introMusic.loop = true;

document.addEventListener("click", () => {
    introMusic.play();
    introMusic.volume = 0.3
});

const btn = document.querySelectorAll(".search-poke");

export function playWithLimit(src, seconds) {
    const audio = new Audio(src);

    audio.play();

    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, seconds * 1000);
}

btn.forEach(el => {

    el.addEventListener("click", async () => {
        createModal();
        await viewPokes();

        introMusic.pause();
        playWithLimit("assets/audio/WhatsApp Audio 2026-02-23 at 19.59.21.mpeg", 5);

        if (btn[0] === el) {
            listPokescard("playerOne")
        };

        if (btn[1] === el) {
            listPokescard("playerTwo")
        };
    });
});