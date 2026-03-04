import { introMusic } from "../Utils/sounds.js";
import getPokemon from "../Api/getPokemon.js";
import viewPokes from "./viewPokes.js";
import addPoke from "./addPokes.js";

function createModal(jogador = 1) {
  
  const section = document.createElement("section");
  section.classList.add("modal-poke");
  document.body.prepend(section);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <form id="formsearch">
      <input id="searchPoke" type="text" placeholder="Pesquise seu pokémon">
      <button id="btnSearch" type="submit">Pesquisar</button>
    </form>

    <div id="cards-poke" class="cards-poke"></div>

    <div class="btn-page">
      <button id="see-more" type="button">Ver mais</button>
    </div>
  `;
  section.appendChild(modal);

 
  section.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      introMusic.play();
      section.remove();
    }
  });

  const form = modal.querySelector("#formsearch");
  const input = modal.querySelector("#searchPoke");
  const cardsContainer = modal.querySelector("#cards-poke");

  
  viewPokes().then(() => {
    if (jogador === 1) {
      addPoke("playerOne", "playerOneB", 1);
    } else {
      addPoke("playerTwo", "playerTwoB", 2);
    }
  });

  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = input.value.trim().toLowerCase();

    if (!name) {
      await viewPokes();
      if (jogador === 1) {
        addPoke("playerOne", "playerOneB", 1);
      } else {
        addPoke("playerTwo", "playerTwoB", 2);
      }
      return;
    }

    try {
      const pokemon = await getPokemon(name);
      if (!pokemon) {
        alert("Pokémon não encontrado!");
        return;
      }

      cardsContainer.innerHTML = `
        <div class="poke-option" data-name="${pokemon.name}">
          <img src="${pokemon.image}" alt="${pokemon.name}">
          <span>${pokemon.name}</span>
        </div>
      `;

      
      if (jogador === 1) {
        addPoke("playerOne", "playerOneB", 1);
      } else {
        addPoke("playerTwo", "playerTwoB", 2);
      }

    } catch (err) {
      console.error("Erro ao buscar Pokémon:", err);
    }
  });

  
  const btnMore = modal.querySelector("#see-more");
  let offset = 0;
  const limit = 10;

  btnMore.addEventListener("click", async () => {
    offset += limit;
    await viewPokes(offset, limit);

   
    if (jogador === 1) {
      addPoke("playerOne", "playerOneB", 1);
    } else {
      addPoke("playerTwo", "playerTwoB", 2);
    }
  });
}

export default createModal;