function GetLeaderboardGuess() {
  async function GetLeaderboard() { //Most compact way to return a fetch
    const response = await fetch('http://localhost:8080/leaderboard', {}); 
    const json = await response.json();
    return json; //do here wathever with your json if you want to return
  }

  GetLeaderboard().then( resp=> {
      var users = resp.players_guess;
      let place = 0;

      organizeTokens(users);

      users.forEach(function(item) 
      {
        place += 1;
        $('tbody').append('<tr><td>'+ item.id  +'</td><td>'+ place + '</td><td>'+item.player+'</td><td>'+ item.range+'</td><td>'+item.max_seconds+'</td><td>'+item.max_tries+'</td><td>' + item.num_guesses+'</td><td>' + item.time+'</td><td>'+ item.secret_number+'</td><td>'+ "0"+'</td><td>'+ item.play_date.replace("T00:00:00.000Z", "")+'</td></tr>')
      });

  });
}

function GetLeaderboardMemory() {
  async function GetLeaderboard() { //Most compact way to return a fetch
    const response = await fetch('http://localhost:8080/leaderboard', {}); 
    const json = await response.json();
    return json; //do here wathever with your json if you want to return
  }

  GetLeaderboard().then( resp=> {
      var users = resp.players_memory;

      organizeTokens(users);

      users.forEach(item =>
      {
        $('tbody').append('<tr><td>'+item.id+'</td><td>'+item.name+ '</td><td>'+item.time+'</td><td class="text-center">'+ item.clicks+'</td></tr>')
      });

  });
}


/* sorts from best to worst records */
function organizeTokens(list) {
  for (i = 0; i < list.length - 1; i++) {
    if (list[i].indexFound < list[i + 1].indexFound) {
      // do nothing
    } else if (list[i].indexFound > list[i + 1].indexFound) {
      var tempVal = list[i];
      list[i] = list[i + 1];
      list[i + 1] = tempVal;
    }
  }
};