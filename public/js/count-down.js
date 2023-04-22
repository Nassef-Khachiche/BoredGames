var timeleft = sessionStorage.getItem('seconds');

var timer = setInterval(function(){
  if(timeleft <= 1 || document.getElementById('state').innerHTML == "You won!"){
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
  sessionStorage.setItem('seconds', timeleft);
}, 1000);

/* Set value's */
document.getElementById("countdown").innerHTML = sessionStorage.getItem('seconds');
document.getElementById('seconds').value = sessionStorage.getItem('seconds');