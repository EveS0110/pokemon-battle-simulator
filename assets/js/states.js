export function showLoading(container){
    container.innerHTML = `
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
        `;
}


export function showError(container, message){
    container.innerHTML = `
        <p class="error-state">
            ${message}
        </p>
        `;
}


export function showEmpty(container){
    container.innerHTML = `
        <p class="empty-state">
            Nenhum Pokémon selecionado
        </p>
         `;

}
