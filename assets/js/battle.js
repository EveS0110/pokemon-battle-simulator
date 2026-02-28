import { player1Pokemons, player2Pokemons } from "./playersData.js";
import { determinarVencedor } from "./battleLogic.js";
import { resetProgresso } from "./addPokes.js";

function initBattleLogic() {
  const botaoBatalhar = document.querySelector(".status-batalha button");
  const statusTexto = document.querySelector(".status-batalha h2");

  if (!botaoBatalhar) {
    console.error("Botão BATALHAR não encontrado!");
    return;
  }

  
  botaoBatalhar.style.display = "none";

 


  window.addEventListener("pokemonsAtualizados", () => {
    const total = player1Pokemons.length + player2Pokemons.length;

    if (total === 4) {
      botaoBatalhar.style.display = "block";
      statusTexto.textContent = "Pokémons prontos para a batalha!";
    } else {
      botaoBatalhar.style.display = "none";
      statusTexto.textContent = "Aguardando lutadores...";
    }
  });

  
  botaoBatalhar.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("🎮 Batalha iniciada!");
    console.log("👾 Player 1:", player1Pokemons);
    console.log("👾 Player 2:", player2Pokemons);

    
    const resultado = determinarVencedor(player1Pokemons, player2Pokemons);
    console.log("🏆 Resultado:", resultado);

    renderBattleModal(resultado);
  });
}

function renderBattleModal(resultado) {
  const { vencedor, total1, total2 } = resultado;

  let message = "";
  let imagesHTML  = "";
  let name1 = player1Pokemons.map(p => p.name).join(" e ");
  let name2 = player2Pokemons.map(p => p.name).join(" e ");

  if (vencedor === "Jogador 1") {
    message = "🏆 JOGADOR 1 VENCEU!";
    imagesHTML = `
    <div class=winner-container">
      <img src="${player1Pokemons[0].image}" alt="${player1Pokemons[0].name}" class="winner-img bounce-animation">
      <img src="${player1Pokemons[1].image}" alt="${player1Pokemons[1].name}" class="winner-img bounce-animation">
      </div>
      `;
  } else if (vencedor === "Jogador 2") {
    message = "🏆 JOGADOR 2 VENCEU!";
    imagesHTML = `
    <div class=winner-container">
      <img src="${player2Pokemons[0].image}" alt="${player2Pokemons[0].name}" class="winner-img bounce-animation">
      <img src="${player2Pokemons[1].image}" alt="${player2Pokemons[1].name}" class="winner-img bounce-animation">
      </div>
      
      
  `;
  } else {
    message = "⚔️ DEU EMPATE!";
    imagesHTML = `<img src="./assets/img/empate.png" alt="Empate" class="winner-img bounce-animation">`;
  }

  const modalOverlay = document.createElement("section");
  modalOverlay.classList.add("modal-poke", "modal-result-overlay");

  modalOverlay.innerHTML = `
    <div class="modal result-modal">
      <h2>${message}</h2>
      
      ${imagesHTML}

      <div class="scores">
        <p><strong>Jogador 1 (${name1}):</strong> ${total1} pts</p>
        <p><strong>Jogador 2 (${name2}):</strong> ${total2} pts</p>
      </div>

      <button id="btn-restart" class="btn-action">JOGAR NOVAMENTE</button>
    </div>
  `;

  document.body.prepend(modalOverlay);

  document.getElementById("btn-restart").addEventListener("click", () => {
    modalOverlay.remove();
    resetArena();
  });
}

function resetArena() {
  const players = ["playerOne", "playerOneB", "playerTwo", "playerTwoB"];

  resetProgresso();

  players.forEach((id) => {
    const p = document.getElementById(id);
    if (p) {
      p.innerHTML = `
        <img class="poke-img" src="./assets/img/MysteryPokemon-300x300.webp" alt="Mistério">
        <div class="poke-infor">
          <h3 class="poke-name">Pokémon</h3>
          <span class="type"></span>
          <div class="atributes">
            <div class="hp"><h3>HP</h3><p>...</p></div>
            <div class="ataque"><h3>Ataque</h3><p>...</p></div>
            <div class="defesa"><h3>Defesa</h3><p>...</p></div>
          </div>
        </div>
      `;
    }
  });

  
  player1Pokemons.length = 0;
  player2Pokemons.length = 0;

  const statusTexto = document.querySelector(".status-batalha h2");
  const botaoBatalhar = document.querySelector(".status-batalha button");

  statusTexto.textContent = "Aguardando lutadores...";
  botaoBatalhar.style.display = "none";
}

export default initBattleLogic;