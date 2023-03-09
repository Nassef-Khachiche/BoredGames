const holder = document.querySelectorAll('.holder')
let count = 0;

function showcard() {
    let cardname = this.children[0].classList[2];

    console.log(count, cardname);
    count += 1;

    this.classList.add('show')

    if (count >= 2)
    {
        /* wait a second to smooth out when hiding the cards */
        setTimeout(function(){ 
            count = 0;
            holder.forEach((item) => item.classList.remove('show'))
        }, 1000);
        
    }
}

holder.forEach((item) => item.addEventListener('click', showcard))