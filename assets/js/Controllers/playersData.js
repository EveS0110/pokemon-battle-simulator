
export let player1Pokemons = [];
export let player2Pokemons = [];

export function setPlayerPokemons(jogador, pokemons) {
  if (jogador === 1) player1Pokemons = pokemons;
  else if (jogador === 2) player2Pokemons = pokemons;

  const event = new CustomEvent("pokemonsAtualizados", {
    detail: { jogador, pokemons }
  });
  window.dispatchEvent(event);
}