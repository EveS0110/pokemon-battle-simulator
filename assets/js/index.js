import createModal from "./createModal.js";
import listPokeCard from "./listPokeCard.js"; 
import initBattleLogic from "./battle.js";
import { introMusic, unlockSounds, startBattleMusic } from "./sounds.js";

// Seleciona os elementos do Overlay
const overlay = document.getElementById("overlay-inicio");
const btnComecar = document.getElementById("btn-comecar");

/**
 * Função principal para destravar o áudio e iniciar o jogo.
 * O clique num botão HTML é 100% eficaz no Celular e PC.
 */
const iniciarJogo = () => {
    console.log("Iniciando jornada e destravando áudio...");
    
    // 1. Libera os canais de áudio
    unlockSounds();
    
    // 2. Toca a música de introdução
    introMusic.muted = false;
    introMusic.volume = 0.3;
    introMusic.play().catch(err => console.log("Erro ao tocar música:", err));

    // 3. Remove o overlay da tela com um efeito suave
    if (overlay) {
        overlay.style.transition = "opacity 0.5s ease";
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
    }
};

// Adiciona os eventos de clique e toque (essencial para mobile)
if (btnComecar) {
    btnComecar.addEventListener("click", iniciarJogo);
    btnComecar.addEventListener("touchstart", iniciarJogo);
}

// Lógica dos botões de busca de Pokémon
const btnSearch = document.querySelectorAll(".search-poke");

btnSearch.forEach((el, index) => {
    el.addEventListener("click", async () => {
        const jogador = index === 0 ? 1 : 2; 

        // Se já existem 2 Pokémons na arena, significa que o segundo jogador
        // está abrindo o modal agora -> Hora da música do WhatsApp!
        const pokesNaArena = document.querySelectorAll(".poke-img").length;
        if (pokesNaArena >= 2) {
            startBattleMusic();
        }
        
        // Abre o modal de seleção
        createModal(jogador);

        // Lista os cards específicos de cada player
        if (index === 0) {
            listPokeCard("playerOne", "playerOneB", 1);
        } else if (index === 1) {
            listPokeCard("playerTwo", "playerTwoB", 2);
        }
    });
});

initBattleLogic();