import getPokemon from "./getPokemon.js";
import { introMusic, playWithLimit } from "./index.js";

function addPoke(card) {
  let pokeCard = document.querySelectorAll(".poke-option");
  const pokeMain = document.getElementById(`${card}`);

  pokeCard.forEach((el) => {
    let pokeClicked;
    const chosenPoke = new Audio(
      "assets/audio/WhatsApp Audio 2026-02-23 at 20.51.48.mpeg",
    );

    const hoverCard = new Audio("assets/audio/hoverCard.mpeg");

    el.addEventListener("mouseenter", async () => {
      hoverCard.currentTime = 0;
      hoverCard.play();

      setTimeout(() => {
        hoverCard.pause();
        hoverCard.currentTime = 0;
      }, 2000);
    });

    el.addEventListener("click", async () => {
      pokeClicked = el.lastElementChild.textContent;

      const pokemon = await getPokemon(pokeClicked);
      console.log(pokemon);
      const modal = document.querySelector(".modal-poke");

      pokeMain.innerHTML = `
            <img class="poke-img" src="${pokemon.image}" alt="${pokemon.name}">

            <div class="poke-infor">
                <h3 class="poke-name">${pokemon.name}</h3>

                <span class="type type-${pokemon.types[0]}">${[...pokemon.types]}</span>

                <div class="atributes">
                <div class="hp">
                    <h3>HP</h3>
                    <p>${pokemon.hp}</p>
                </div>

                <div class="ataque">
                    <h3>Ataque</h3>
                    <p>${pokemon.attack}</p>
                </div>

                <div class="defesa">
                    <h3>Defesa</h3>
                    <p>${pokemon.defense}</p>
                </div>
            </div>
            `;
      pokeMain.setAttribute("data-stats", pokemon.totalStats);
      pokeMain.setAttribute("data-name", pokemon.name);
      pokeMain.setAttribute("data-image", pokemon.image);

      chosenPoke.play();

      setTimeout(() => {
        chosenPoke.pause();
        chosenPoke.currentTime = 0;
      }, 2000);

      introMusic.play();
      return modal.remove();
    });
  });
}

export default addPoke;
