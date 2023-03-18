let deck = ['card-joker', 'card-hearts-10', 'card-clubs-a', 'card-diamonds-k', 'card-spades-q', 'card-clubs-j', 'card-clubs-10', 'card-hearts-4', 'card-spades-a'];

/*Shuffle the deck */
deck.sort(() => Math.random() - 0.5);

/*Get the cards*/
const cards = document.querySelectorAll('.holder')
var tiles = [];

/*Make the pairs*/
for (var i = 0; i < deck.length; i++) 
{
    tiles.push(deck[i], deck[i]);
}

/* randomize tiles array */
tiles.sort(() => Math.random() - 0.5);
console.log(tiles);


/* give each card a random pair */
let counter = -1;
cards.forEach(card => {
    counter++;
    card.children[0].classList.add(tiles[counter]);
});
