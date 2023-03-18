let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let win = false;



cards.forEach(card => card.addEventListener('click', () => {
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
    $('#exampleModal').modal('show');

}));

function displayTimer() {
    if (win == false) {
        milliseconds+=10;
        if(milliseconds == 1000){
            milliseconds = 0;
            seconds++;
            if(seconds == 60){
                seconds = 0;
                minutes++;
                if(minutes == 60){
                    minutes = 0;
                    hours++;
                }
            }   
        }
        
        /*  if variable = (condition) ? do this : else do this*/
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;

        /* Else if do this, Else do this */
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    
        /* Update time with the interval of 10 miliseconds declared on the top */
        timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
        if (score >= 9) {
            win = true;
            $('#exampleModal').modal('show');
        }
    }
    else {
        document.querySelector('.timerDisplay').innerHTML = "GAME OVER !";
    }
}