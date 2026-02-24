import viewPokes from "./viewPokes.js";
import addPoke from "./addPokes.js";
import seachPokemon from "./seachPokemon.js";



function listPokescard(card) {
    let offset = 0;

    const form = document.getElementById("formsearch");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    addPoke(card);

    const seeMre = document.getElementById("see-more");

    seeMre.addEventListener("click", async () => {
        offset += 10;
        await viewPokes(offset);
        addPoke(card);
    });

    const inputSearch = document.getElementById("seachPoke");
    const btnSearch = document.getElementById("btnSearch");

    btnSearch.addEventListener("click",async () => {
        await seachPokemon(inputSearch.value);
        const cardPoke = document.getElementById(`${inputSearch.value}`);

        cardPoke.addEventListener("click", () => {
            addPoke(card)
        });
    });
};

export default listPokescard;