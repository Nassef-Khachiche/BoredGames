const { prisma } = require("../../prisma/connection");

exports.savedata = async (req, res) => 
{
    let { username, seconds } = req.body;

    const player = await prisma.leaderboard_puzzle.create({
        data: {
            name: username,
            time: seconds.toString(),
        },
    });

    res.redirect('/puzzle/leaderboard');
}