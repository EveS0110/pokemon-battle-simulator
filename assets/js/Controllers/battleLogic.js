
export function calcularTotalStats(pokemon) {
  const hp = pokemon.hp || 0;
  const attack = pokemon.attack || 0;
  const defense = pokemon.defense || 0;
  return hp + attack + defense;
}


function calcularTotalDoTime(time) {
  if (!Array.isArray(time)) return 0;
  return time.reduce((total, pokemon) => total + calcularTotalStats(pokemon), 0);
}


export function determinarVencedor(player1Pokemons, player2Pokemons) {
  const total1 = calcularTotalDoTime(player1Pokemons);
  const total2 = calcularTotalDoTime(player2Pokemons);

  let vencedor;
  if (total1 > total2) {
    vencedor = "Jogador 1";
  } else if (total2 > total1) {
    vencedor = "Jogador 2";
  } else {
    vencedor = "Empate";
  }

  return {
    vencedor,
    total1,
    total2
  };
}