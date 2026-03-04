import getPokemon from "./getPokemon.js"

async function getAllPokemon(offset = 0, limit=10) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Erro ao Capturar pokemons.");
      } else {
        throw new Error(`Erro na API: ${res.status}`);
      }
    };

    const data = await res.json();

    const types = data.results.map(t => t.name);
    const pokemons = [];

    for (let i = 0; i < types.length; i++) {
        const pokeName = types[i];
        
        const {name, image} = await getPokemon(pokeName);

        pokemons.push({name, image});
    };

    return pokemons

  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error.message);
  };
};

export default getAllPokemon




