export function createPokemonCard(pokemon){
    const card = document.createElement("article")

    card.classList.add("pokemon-card");

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

    return card;
}