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




/* 
CONTROLLER.JS 

Este arquivo faz a conexão entre o HTML (View) e o Service (Model).

O que deve ser feito aqui:
1️ Capturar os elementos do HTML (inputs, botões e áreas de exibição dos Pokémon).
2️ Criar funções para:
    - Buscar o Pokémon quando o usuário clicar no botão "Buscar".
    - Exibir os dados retornados pelo service.js (nome, imagem, tipos e soma dos atributos).
    - Tratar erros quando o Pokémon não for encontrado.
3 Controlar o botão "BATALHAR":
    - Calcular a soma dos stats dos dois Pokémon.
    - Determinar o vencedor ou empate.
    - Mostrar o resultado no modal.
4️ Implementar o botão "Jogar Novamente" para resetar o jogo.

 
Use async/await para lidar com a função buscarPokemon() do service.js.
*/
