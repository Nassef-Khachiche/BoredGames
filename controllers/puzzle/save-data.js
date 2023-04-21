const { prisma } = require("../../prisma/connection");

exports.savedata = async (req, res) => 
{
    let { name, seconds } = req.body;

    const player = await prisma.leaderboard_puzzle.create({
        data: {
            name: name,
            seconds: seconds,
        }
    });

    res.redirect('/puzzle/leaderboard');
}