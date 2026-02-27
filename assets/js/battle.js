function initBattleLogic() {
  const battleFormElement = document.querySelector(".batalha-form");

  battleFormElement.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recarregar a página

    const p1 = document.getElementById("playerOne");
    const p2 = document.getElementById("playerTwo");

    const stats1 = parseInt(p1.getAttribute("data-stats"));
    const stats2 = parseInt(p2.getAttribute("data-stats"));

    // Validação: Garante que o jogo não quebre se clicarem antes da hora
    if (isNaN(stats1) || isNaN(stats2)) {
      alert(
        "⚠️ Os dois jogadores precisam escolher um Pokémon antes de batalhar!",
      );
      return;
    }

    let resultMessage = "";
    let winnerImage = "";

    // Lógica de Batalha
    if (stats1 > stats2) {
      resultMessage = "🏆 JOGADOR 1 VENCEU!";
      winnerImage = p1.getAttribute("data-image");
    } else if (stats2 > stats1) {
      resultMessage = "🏆 JOGADOR 2 VENCEU!";
      winnerImage = p2.getAttribute("data-image");
    } else {
      resultMessage = "⚔️ DEU EMPATE!";
      winnerImage = "./assets/img/MysteryPokemon-300x300.webp"; // Imagem neutra
    }

    renderBattleModal(
      resultMessage,
      stats1,
      stats2,
      winnerImage,
      p1.getAttribute("data-name"),
      p2.getAttribute("data-name"),
    );
  });
}

function renderBattleModal(message, score1, score2, imgUrl, name1, name2) {
  // Criação do Modal de forma dinâmica
  const modalOverlay = document.createElement("section");
  modalOverlay.classList.add("modal-poke", "modal-result-overlay");

  modalOverlay.innerHTML = `
        <div class="modal result-modal">
            <h2>${message}</h2>
            <img src="${imgUrl}" alt="Vencedor" class="winner-img bounce-animation">
            
            <div class="scores">
                <p><strong>Jogador 1 (${name1}):</strong> ${score1} pts</p>
                <p><strong>Jogador 2 (${name2}):</strong> ${score2} pts</p>
            </div>
            
            <button id="btn-restart" class="btn-action">JOGAR NOVAMENTE</button>
        </div>
    `;

  document.body.prepend(modalOverlay);

  // Lógica para reiniciar o jogo
  document.getElementById("btn-restart").addEventListener("click", () => {
    modalOverlay.remove();
    resetArena();
  });
}

function resetArena() {
  // Limpa os data-attributes e reseta a interface para o estado inicial
  const players = ["playerOne", "playerTwo"];
  players.forEach((playerId) => {
    const p = document.getElementById(playerId);
    p.removeAttribute("data-stats");
    p.removeAttribute("data-name");
    p.removeAttribute("data-image");

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
  });
}

export default initBattleLogic;
