const holder = document.querySelectorAll('.holder')
let count = 0;
let pair = [];
let score = 0;

function showcard() {
    let cardname = this.children[0].classList[2];

    pair.push(cardname);

    console.log(count, cardname);
    count += 1;

    this.classList.add('show')

    if (count >= 2)
    {
        if (pair[0] == pair[1]) 
        {
            /* reset for next pair */
            pair = [];
            count = 0
            score += 1;
            
            console.log('Pair');
        }
        else 
        {
            pair = [];
            /* wait a second to smooth out when hiding the cards */
            setTimeout(function(){ 
                count = 0;
                holder.forEach((item) => item.classList.remove('show'))
            }, 1000);
        }
        
    }
}

holder.forEach((item) => item.addEventListener('click', showcard))