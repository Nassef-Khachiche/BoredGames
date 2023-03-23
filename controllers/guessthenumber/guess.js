const { prisma } = require("../../prisma/connection");
let guesses = [];

exports.guess = async (req, res) => 
{
    let { guess, seconds  } = req.body;

    console.log(seconds);

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

        req.session.disabled = "disabled"

        let cheating = 0;
        console.log(req.session.cheating);
        if (req.session.cheating == 'd-none') {
            cheating = 0;
        } 
        else {
            cheating = 1;
        }

        try 
        {
            let maxtries = req.session.player.tries + guesses.length;

            const leaderboard = await prisma.leaderboard_guessthenumber.create({
                data: {
                    place: 1,
                    player: req.session.player.username,
                    range: req.session.player.maximum,
                    max_seconds: req.session.player.seconds,
                    max_tries: maxtries.toString(),
                    num_guesses: guesses.length.toString(),
                    time: seconds,
                    secret_number: answer.toString(),
                    cheated: cheating,
                },
            });
        }
        catch (e) 
        {
            console.log(e);
        }

        req.session.color = "success"
        req.session.state = "You won!"
        res.redirect('/guess');
    }
    else 
    {
        res.redirect('/guess');
    }

}

exports.restart = async (req, res) => 
{
    /* clear all sessions */
    try {
        req.session.player.username = '';
        req.session.player.maximum = '';
        req.session.player.minimum = '';
        req.session.player.seconds = '';
        req.session.player.tries = '';
        req.session.guesses = '';
        req.session.state = '';
        req.session.disabled = '';
        req.session.cheating = 'd-none';
        answer = 0;
        guesses = [];
    } catch (e) {
        res.redirect('/settings');
        console.log(e);
    }

    res.redirect('/settings');
}