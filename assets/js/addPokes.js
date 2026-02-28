
import getPokemon from "./getPokemon.js";
import { setPlayerPokemons } from "./playersData.js";
import { playHover, playChoose } from "./sounds.js";


const progressoEscolha = {
  1: { slot: 0, lista: [] },
  2: { slot: 0, lista: [] }
};

function addPoke(card1, card2, jogador) {
  const cards = [
    document.getElementById(card1),
    document.getElementById(card2)
  ];

  const pokeOptions = document.querySelectorAll(".poke-option");
  if (!pokeOptions || pokeOptions.length === 0) return;

  
  pokeOptions.forEach((opt) => {
    opt.addEventListener("mouseenter", () => {
      try {
        playHover();
      } catch (err) {
        console.warn("Falha ao tocar som de hover:", err);
      }
    });
  });

  
  pokeOptions.forEach((opt) => {
    opt.addEventListener("click", async () => {
      const dados = progressoEscolha[jogador];

      
      if (dados.slot >= cards.length) return;

      const name = opt.dataset.name;
      if (!name) return;

      const pokemon = await getPokemon(name);
      if (!pokemon) {
        alert("Pokémon não encontrado.");
        return;
      }

      const totalStats = (pokemon.hp || 0) + (pokemon.attack || 0) + (pokemon.defense || 0);
      const target = cards[dados.slot];

      
      target.innerHTML = `
        <img class="poke-img" src="${pokemon.image}" alt="${pokemon.name}">
        <div class="poke-infor">
          <h3 class="poke-name">${pokemon.name}</h3>
          <span class="type type-${pokemon.types[0]}">${pokemon.types.join(", ")}</span>
          <div class="atributes">
            <div class="hp"><h3>HP</h3><p>${pokemon.hp}</p></div>
            <div class="ataque"><h3>Ataque</h3><p>${pokemon.attack}</p></div>
            <div class="defesa"><h3>Defesa</h3><p>${pokemon.defense}</p></div>
          </div>
        </div>
      `;

      
      target.setAttribute("data-stats", totalStats);
      target.setAttribute("data-name", pokemon.name);
      target.setAttribute("data-image", pokemon.image);

      
      dados.lista.push(pokemon);
      playChoose();
      dados.slot++; 

      if (dados.slot === cards.length) {
        setPlayerPokemons(jogador, [...dados.lista]);

        
        window.dispatchEvent(
          new CustomEvent("pokemonsAtualizados", {
            detail: { jogador, pokemons: dados.lista }
          })
        );

        window.dispatchEvent(
          new CustomEvent("escolhaCompleta", { detail: { jogador } })
        );

        const modal = document.querySelector(".modal-poke");
        if (modal) modal.remove();
        
        
      }
    });
  });
}

export function resetProgresso() {
  progressoEscolha[1] = { slot: 0, lista: [] };
  progressoEscolha[2] = { slot: 0, lista: [] };
}

export default addPoke;