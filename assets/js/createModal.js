import { introMusic } from "./index.js";

function createModal() {
    const section = document.createElement("section");
    section.classList.add("modal-poke");

    document.body.prepend(section);

    const modal = document.createElement("div");
    modal.classList.add("modal")
    modal.innerHTML = `
    <form id="formsearch">
    <input id="seachPoke"  type="text" placeholder="Pesquise seu pokémon">
    <button id="btnSearch" type="submit">Pesquisar</button>
    </form>
    
    <div id="cards-poke" class="cards-poke">
    </div>
    
    <div class="btn-page">
    <button id="see-more">Ver mais</button>
    </div>
    `

    section.appendChild(modal);

    section.addEventListener("click", (e) => {
        console.log(e.target)
        if (!modal.contains(e.target)) {
            section.remove();
            introMusic.play();
        };
    });
};

export default createModal;