/* puzzle picture */
let timeLeft = 30;
const elem = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 1) {
        elem.innerHTML = "DNF"
        clearTimeout(timerId);

    } else {
        elem.innerHTML = timeLeft + 's';
        timeLeft--;
    }
}

img.forEach(function(item) {
    item.addEventListener("click", function(){
        countdown();
    });
});

text.forEach(function(item) {
    item.addEventListener("click", function(){
        countdown();
    });
});