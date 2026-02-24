import getPokemon from "./getPokemon.js";

async function seachPokemon(name) {
    const cardsPoke = document.getElementById("cards-poke");

    const pokemon = await getPokemon(name);

    cardsPoke.innerHTML = `
        <div id="${pokemon.name}" class="poke-option">
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <span>${pokemon.name}</span>
        </div>
    `
};

export default seachPokemon;