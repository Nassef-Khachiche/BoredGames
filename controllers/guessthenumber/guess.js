const { prisma } = require("../../prisma/connection");
let guesses = [];

exports.guess = async (req, res) => 
{
    let { guess } = req.body;
    let answer = parseInt(req.session.answer);

    console.log(guess, answer);

    req.session.disabled = ""

    /* tries */
    req.session.player.tries = parseInt(req.session.player.tries - 1);

    /* guesses */
    guesses.push(guess);
    req.session.guesses = guesses.toString();

    /* Higher or lower */
    if (guess > answer) 
    {
        req.session.color = "danger"
        req.session.state = "Lower"
        console.log('lower')
    }
    else
    {
        req.session.color = "primary"
        req.session.state = "Higher"
        console.log('higher')
    }
    
    /* On wrong guess */
    if (guess == answer) {

        try 
        {
            const leaderboard = await prisma.leaderboard.create({
                data: {
                    place: 1,
                    player: req.session.player.username,
                    range: req.session.player.maximum,
                    max_seconds: req.session.player.seconds,
                    max_tries: req.session.player.tries.toString(),
                    num_guesses: guesses.length.toString(),
                    time: req.session.player.seconds.toString(),
                    secret_number: answer.toString(),
                    cheated: 0,
                },
            });

        }
        catch (e) 
        {
            console.log(e);
        }

        req.session.state = "You won!"
        res.redirect('/guess');
    }
    else 
    {
        res.redirect('/guess');
    }

}