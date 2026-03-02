export function mostrarModalVencedor(resultado) {
  const modal = document.createElement("div");
  modal.classList.add("modal-resultado");
  modal.innerHTML = `
    <div class="modal-content">
      <h2>🏆 Resultado da Batalha</h2>
      <p><strong>${resultado.vencedor}</strong> venceu!</p>
      <p>Total Jogador 1: ${resultado.total1}</p>
      <p>Total Jogador 2: ${resultado.total2}</p>
      <button id="fechar-modal">Jogar novamente</button>
    </div>
  `;

  document.body.appendChild(modal);

  const fechar = modal.querySelector("#fechar-modal");
  fechar.addEventListener("click", () => {
    modal.remove();
    location.reload(); 
  });
}