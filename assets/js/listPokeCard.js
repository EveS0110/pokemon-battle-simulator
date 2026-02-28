import viewPokes from "./viewPokes.js";
import addPokes from "./addPokes.js";

function listPokeCard(card1, card2, jogador) {
  let offset = 0;

  addPokes(card1, card2, jogador);

  const seeMore = document.getElementById("see-more");
  if (!seeMore) return;

  const newSeeMore = seeMore.cloneNode(true);
  seeMore.replaceWith(newSeeMore);

  newSeeMore.addEventListener("click", async () => {
    offset += 10;
    await viewPokes(offset);
    addPokes(card1, card2, jogador);
  });
}

export default listPokeCard;