import getPokemon from "./getPokemon.js";
import { setPlayerPokemons } from "./playersData.js";
import { playHover, playChoose, startBattleMusic } from "./sounds.js";

const progressoEscolha = {
  1: { slot: 0, lista: [] },
  2: { slot: 0, lista: [] }
};

function addPoke(card1, card2, jogador) {
  const pokeOptions = document.querySelectorAll(".poke-option");
  if (!pokeOptions) return;

  pokeOptions.forEach((opt) => {
    
    opt.addEventListener("mouseenter", () => {
      try { playHover(); } catch (err) {}
    });

    
    opt.addEventListener("click", async () => {
      const dados = progressoEscolha[jogador];
      
      
      if (dados.slot >= 2) return;

      const name = opt.dataset.name;
      const pokemon = await getPokemon(name);
      if (!pokemon) return;

      
      const targetId = dados.slot === 0 ? card1 : card2;
      const target = document.getElementById(targetId);

      if (target) {
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
        
        const totalStats = (pokemon.hp || 0) + (pokemon.attack || 0) + (pokemon.defense || 0);
        target.setAttribute("data-stats", totalStats);
      }

      dados.lista.push(pokemon);
      playChoose();
      dados.slot++; 

      
      if (dados.slot === 2) {
        setPlayerPokemons(jogador, [...dados.lista]);

    
        const modal = document.querySelector(".modal-poke");
        if (modal) modal.remove();

        setTimeout(() => {
          const pokesNaArena = document.querySelectorAll("poke-img").length;

          if (pokesNaArena >= 4) {
            startBattleMusic();
            const statusH2 = document.querySelector(".status-batalha h2");
            if (statusH2) statusH2.innerText = "Pokémons prontos para batalhar!";
          }
        }, 100);
      

        
        const p1Pronto = document.querySelector("#playerOne .pokemon img, #playerOneB .pokemon img");
        const p2Pronto = document.querySelector("#playerTwo .pokemon img, #playerTwoB .pokemon img");

        if (p1Pronto || p2Pronto) {
            
            if (progressoEscolha[1].slot === 2 && progressoEscolha[2].slot === 2) {
                startBattleMusic();
                const statusH2 = document.querySelector(".status-batalha h2");
                if (statusH2) statusH2.innerText = "Pokémons prontos para batalhar!";
            }
        }
      }
    });
  });
}

export function resetProgresso() {
  progressoEscolha[1] = { slot: 0, lista: [] };
  progressoEscolha[2] = { slot: 0, lista: [] };
}

export default addPoke;