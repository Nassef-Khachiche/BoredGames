async function GetLeaderboard() { //Most compact way to return a fetch
    const response = await fetch('http://localhost:8080/leaderboard', {}); 
    const json = await response.json();
    return json; //do here wathever with your json if you want to return
}

GetLeaderboard().then( resp=> {
    var users = resp.players;
    users.forEach(function(item) 
    {
      $('tbody').append('<tr><td>'+item.id+'</td><td>'+item.place+ '</td><td>'+item.player+'</td><td>'+ item.range+'</td><td>'+item.max_seconds+'</td><td>'+item.max_tries+'</td><td>' + item.num_guesses+'</td><td>' + item.time+'</td><td>'+ item.secret_number+'</td><td>'+ "0"+'</td><td>'+ item.play_date.replace("T00:00:00.000Z", "")+'</td></tr>')
    });

});