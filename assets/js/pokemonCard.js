export function createPokemonCard(pokemon, side = blue){
    const card = document.createElement("article")

    card.classList.add("pokemon-card");

    card.classList.add(side === 'blue' ? "player-blue" : "player-red")

    card.innerHTML = `
    <img
        class="pokemon-image"
        src="${pokemon.image}"
        alt="${pokemon.name}"
    />
    
    <div class="pokemon-info">
        <h3 class="pokemon-name">${pokemon.name}</h3>
        
        <p class="pokemon-types">
            ${pokemon.types.join(" • ")}
        </p>
        
        <p class="pokemon-stats">
            Total Stats: <strong>${pokemon.totalStats}</strong>
        </p>
    </div>
    `;


    card.style.animation = "fadeIn 0.3s ease"

    return card;
}


//Cria um componete visual representando um pokemon selecionado - apenas cria e retonar o elemento