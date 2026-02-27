import getPokemon from "./getPokemon.js";
import { introMusic, playChoose, playHover} from "./sounds.js";
import { setPlayerPokemons } from "./playersData.js";


function addPoke(card1, card2, jogador) {
  let slotAtual = 0;
  const pokemonsEscolhidos = [];

  const cards = [
    document.getElementById(card1),
    document.getElementById(card2)
  ];

  const modal = document.querySelector(".modal-poke");
  if (!modal) return;

  modal.addEventListener("mouseover", (e) => {
  const option = e.target.closest(".poke-option");
  if (!option) return;

  playHover(); 
});

modal.addEventListener("click", (e) => {
  const option = e.target.closest(".poke-option");
  if (!option) return;

  playChoose(); 

  escolherPokemon(option);
});

async function escolherPokemon(option) {
  if (slotAtual >= cards.length) return;

  const name = option.dataset.name;
  const pokemon = await getPokemon(name);

    const target = cards[slotAtual];

    target.innerHTML = `
      <img class="poke-img" src="${pokemon.image}">
      <div class="poke-infor">
        <h3 class="poke-name">${pokemon.name}</h3>
        <span class="type type-${pokemon.types[0]}">
          ${pokemon.types.join(", ")}
        </span>
        <div class="atributes">
          <div class="hp"><h3>HP</h3><p>${pokemon.hp}</p></div>
          <div class="ataque"><h3>Ataque</h3><p>${pokemon.attack}</p></div>
          <div class="defesa"><h3>Defesa</h3><p>${pokemon.defense}</p></div>
        </div>
      </div>
    `;
    pokemonsEscolhidos.push(pokemon);
    slotAtual++;

    if (slotAtual === cards.length) {
      const pokemonsEscolhidos = cards.map(card => ({
        name: card.querySelector(".poke-name")?.textContent,
        hp: Number(card.querySelector(".hp p")?.textContent),
        attack: Number(card.querySelector(".ataque p")?.textContent),
        defense: Number(card.querySelector(".defesa p")?.textContent),
        image: card.querySelector(".poke-img")?.src
      }));

      const jogador = card1.includes("One") ? 1 : 2;
      setPlayerPokemons(jogador, pokemonsEscolhidos);

      modal.remove();
      introMusic.play();
} } }

export default addPoke;