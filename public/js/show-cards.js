const holder = document.querySelectorAll('.holder')
const paired_cards = document.querySelectorAll('.show')

let clicks = 0;
let count = 0;
let score = 0;

let pair = [];
let paired = [];

let fallen = 0;

function showcard() {
    clicks += 1;
    document.querySelector('.clicks').innerHTML = clicks;

    let cardname = this.children[0].classList[2];
    pair.push(cardname);

    let card = this;
    paired.push(card);

    console.log(count, cardname);
    count += 1;

    this.classList.add('show')

    if (count >= 2)
    {
        /* wait until you turned a card */
        holder.forEach((item) => item.classList.add('wait-turn'))

        if (pair[0] == pair[1]) 
        {
            paired[0].classList.add('fall');
            paired[1].classList.add('fall');

            /* reset for next pair */
            paired = [];
            pair = [];
            count = 0;
            score += 1;
            document.querySelector('.score').innerHTML = score;
            console.log('Pair');

            holder.forEach((item) => item.classList.remove('wait-turn'))
        }
        else 
        {
            paired = [];
            pair = [];

            /* wait a second to smooth out when hiding the cards */
            setTimeout(function(){ 
                count = 0;
                holder.forEach((item) => item.classList.remove('show'))
                holder.forEach((item) => item.classList.remove('wait-turn'))
            }, 1000);
        }
    }
}

holder.forEach((item) => item.addEventListener('click', showcard))