var deadline = new Date().getTime() / 1000 + 100;

var x = setInterval(function() {
  var now = new Date().getTime() / 1000;
  var t = deadline - now;
  var seconds = Math.floor((t % (1000 * 60)) / 1000);

  document.querySelector(".countdown").innerHTML = Math.round(t) + "s ";

  if (t < 0) {
      clearInterval(x);
      document.querySelector(".countdown").innerHTML = "Game over!";
  }

}, 1000);