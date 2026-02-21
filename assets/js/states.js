export function showLoading(container){
    container.innerHTML = `
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
        `;
}

// Substitui todo o conteúido do contairner e represnta o carregamento visual 


export function showError(container, message){
    container.innerHTML = `
        <p class="error-state">
            ${message}
        </p>
        `;
}


// exibi mensagem de erro 


export function showEmpty(container){
    container.innerHTML = `
        <p class="empty-state">
            Nenhum Pokémon selecionado
        </p>
         `;

}

//nenhum pokmon encontrado 
