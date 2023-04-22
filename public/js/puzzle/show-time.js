/* puzzle picture */
const countdownTime = document.getElementById('timer');
const timeInSeconds = document.getElementById('time');

let gameStart = true;
let clicked = false;

let timeLeft = 29;

function countdown() {

    if (total_pairs == 5) 
    {
        $('#time').val(timeLeft + 1);
        gameStart = false;
    }

    if (gameStart == true) 
    {
        if (timeLeft == 0) {
            countdownTime.innerHTML = "DNF"
            $('#exampleModal').show();
        } else {
            countdownTime.innerHTML = timeLeft + 's';
            timeLeft--;
        }
    } 
}

img.forEach(function(item) {
    item.addEventListener("click", function(){
        if (clicked == false) {
            clicked = true;
            setInterval(countdown, 1000);
        }
    });
});

text.forEach(function(item) {
    item.addEventListener("click", function(){
        if (clicked == false) {
            clicked = true;
            setInterval(countdown, 1000);
        }
    });
});