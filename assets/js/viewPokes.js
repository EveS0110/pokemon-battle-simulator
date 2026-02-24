import getAllPokemon from "./getAllPokemon.js";

async function viewPokes(offset = 0, limit = 10) {
    const cardsPoke = document.getElementById("cards-poke");

    const pokemons = await getAllPokemon(offset, limit);

    for (let i = 0; i < pokemons.length; i++) {
        cardsPoke.innerHTML += `
        <div id="${pokemons[i].name}" class="poke-option">
        <img src="${pokemons[i].image}" alt="${pokemons[i].name}">
        <span>${pokemons[i].name}</span>
        </div>
        `
    };
};

export default viewPokes;