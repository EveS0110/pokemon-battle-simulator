import getAllPokemon from "../Api/getAllPokemon.js";

async function viewPokes(offset = 0, limit = 10) {
  const cardsPoke = document.getElementById("cards-poke");
  cardsPoke.innerHTML = "";

  const pokemons = await getAllPokemon(offset, limit);

  pokemons.forEach(poke => {
    const div = document.createElement("div");
    div.classList.add("poke-option");
    div.dataset.name = poke.name;

    div.innerHTML = `
      <img src="${poke.image}" alt="${poke.name}">
      <span>${poke.name}</span>
    `;

    cardsPoke.appendChild(div);
  });
}

export default viewPokes;