const { prisma } = require("../../prisma/connection");

exports.savescore = async (req, res) => 
{
    let {
        username,
        time,
        clicks,
        score,
    } = req.body


    console.log(req.body);

    try {
        const player = await prisma.leaderboard_memory.create({
            data: {
                name: username,
                time: time,
                clicks: parseInt(clicks),
                score: parseInt(score),
            }
        });

        res.redirect("/memory/leaderboard");
    } 
    catch (e) 
    {
        res.status(400).json({ 
            message: 'Something went wrong.',
            information: e,
        });
    }

}