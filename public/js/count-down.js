var timeleft = parseInt(document.getElementById("countdown").innerHTML);
var Timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(Timer);
    document.getElementById("countdown").innerHTML = "Game over!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);