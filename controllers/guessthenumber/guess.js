
exports.guess = async (req, res) => 
{
    let { guess } = req.body;
    let answer = parseInt(req.session.answer);

    console.log(guess, answer);

    if (guess > answer) 
    {
        console.log('lower')
    }
    else 
    {
        console.log('higher')
    }

    if (guess == answer) {
        res.redirect('/win');
    }
    else 
    {
        res.redirect('/guess');
    }

}