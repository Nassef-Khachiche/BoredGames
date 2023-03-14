let deck = ['card-joker', 'card-hearts-10', 'card-clubs-a', 'card-diamonds-k', 'card-spades-q', 'card-clubs-j', 'card-clubs-10', 'card-hearts-4', 'card-spades-a'];

/* shuffle the deck */
deck.sort(() => Math.random() - 0.5);
let paired_number = [];
console.log(deck);


const cards = document.querySelectorAll('.holder')

cards.forEach(card => {
    var random_index = Math.floor(Math.random() * 8) + 1;
    paired_number.push(random_index);
    card.children[0].classList.add(deck[random_index]);

});