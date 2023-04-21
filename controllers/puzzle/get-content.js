const { prisma } = require("../../prisma/connection");

exports.getcontent = async (req, res) => 
{
    const content = await prisma.content_puzzle.findMany({
        select: {
            id: true,
            sentence: true,
            image_path: true,
        }
    });

    res.status(200).json({ data: content })
}