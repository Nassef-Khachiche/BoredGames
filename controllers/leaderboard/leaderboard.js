exports.leaderboard = async (req, res) => 
{
    
    const players = await prisma.leaderboard.findMany({
        // Returns all user fields
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

    res.status(200).json({
        players: players
    });
}