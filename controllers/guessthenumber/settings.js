
exports.settings = async (req, res) => 
{
    let {
        username,
        minimum,
        maximum,
        tries,
        seconds
    } = req.body;

    console.log(req.body);

    req.session.player = {
        username: username,
        maximum: maximum,
        minimum: minimum,
        tries: tries,
        seconds: seconds
    }

    let min = parseInt(req.session.player.minimum);
    let max = parseInt(req.session.player.maximum);

    let answer = Math.floor(Math.random() * (max - min + 1)) + min;

    req.session.answer = answer;

    res.redirect('/guess');
}