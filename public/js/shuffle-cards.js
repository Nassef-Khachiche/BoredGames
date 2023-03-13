let deck = ['card-joker', 'card-hearts-2', 'card-hearts-3', 'card-hearts-4', 'card-clubs-q'];

/* shuffle the deck */
deck.sort(() => Math.random() - 0.5);

console.log(deck);


const cards = document.querySelectorAll('.holder')

cards.forEach(card => {
    var random_index = Math.floor(Math.random() * 4) + 1;
    card.children[0].classList.add(deck[random_index])
});
