const holder = document.querySelectorAll('.holder')
let count = 0;

function showcard() {
    console.log(count);
    count += 1;
    this.classList.add('show')

    if (count >= 3)
    {
        count = 0;
        holder.forEach((item) => item.classList.remove('show'))
    }
}

holder.forEach((item) => item.addEventListener('click', showcard))