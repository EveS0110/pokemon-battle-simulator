import createModal from "./createModal.js";
import listPokeCard from "./listPokeCard.js"; 
import initBattleLogic from "./battle.js";
import { introMusic } from "./sounds.js";

document.addEventListener("click", () => {
  introMusic.play();
  introMusic.volume = 0.3;
}, { once: true });

const btn = document.querySelectorAll(".search-poke");

btn.forEach((el, index) => {
  el.addEventListener("click", async () => {
    const jogador = index === 0 ? 1 : 2; 
    
    
    createModal(jogador);

  
    introMusic.pause();

    
    if (index === 0) {
      listPokeCard("playerOne", "playerOneB", 1);
    } else if (index === 1) {
      listPokeCard("playerTwo", "playerTwoB", 2);
    }
  });
});


initBattleLogic();