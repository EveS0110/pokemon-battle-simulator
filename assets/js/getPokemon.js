async function getPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Pokémon não encontrado.");
      } else {
        throw new Error(`Erro na API: ${res.status}`);
      }
    };

    const data = await res.json();

    if (!data.stats || !data.types) {
      throw new Error("Resposta da API incompleta.");
    };

    const types = data.types.map(t => t.type.name);
    const hp = data.stats.find(s => s.stat.name === "hp")?.base_stat;
    const attack = data.stats.find(s => s.stat.name === "attack")?.base_stat;
    const defense = data.stats.find(s => s.stat.name === "defense")?.base_stat;
    const image = data.sprites.other["official-artwork"].front_default;

    return {
      name: data.name,
      types,
      hp,
      attack,
      defense,
      image
    };

  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error.message);
  };
};

module.exports = getPokemon;