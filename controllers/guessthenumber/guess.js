let guesses = [];

exports.guess = async (req, res) => 
{
    let { guess } = req.body;
    let answer = parseInt(req.session.answer);

    console.log(guess, answer);
    guesses.push(guess);

    req.session.guesses = guesses.toString();

    // Higher or lower
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

    // On wrong guess
    if (guess == answer) {
        req.session.state = "You won!"
        res.redirect('/guess');
    }
    else 
    {
        res.redirect('/guess');
    }

}