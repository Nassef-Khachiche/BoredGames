const { prisma } = require("../../prisma/connection");

exports.leaderboard = async (req, res) => 
{
    
    const guessthenumber = await prisma.leaderboard_guessthenumber.findMany({
        /* Returns all user fields */
        select: {
            id: true,
            place: true,
            player: true,
            range: true,
            max_seconds: true,
            max_tries: true,
            num_guesses: true,
            time: true,
            secret_number: true,
            play_date: true
        }
    });

    const memory = await prisma.leaderboard_memory.findMany({
        /* Returns all user fields */
        select: {
            id: true,
            name: true,
            time: true,
            clicks: true,
            score: true,
        },
    });

    const puzzle = await prisma.leaderboard_puzzle.findMany({
        /* Returns all user fields */
        select: {
            id: true,
            name: true,
            time: true,
        },
    });


    /* send the data from the database to a endpoint we can later fetch */
    res.status(200).json({
        players_guess: guessthenumber,
        players_memory: memory,
        players_puzzle: puzzle,
    });
}