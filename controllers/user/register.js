const bcrypt = require('bcrypt');
const { prisma } = require("../../prisma/connection");

exports.register = async (req, res) => 
{
    let {
        firstname,
        lastname,
        email,
        password,
    } = req.body;


    console.log(req.body);

    /* Hash password */
    password = await bcrypt.hash(req.body.password, 10); 

    try {

        const user = await prisma.users.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            },
        });

        res.redirect("/login")

        return;

    } catch (e) {
   
        /* P2002: Is there already a user with these unique fields? Then no further. */
        if (e.code === 'P2002') {

            /* The .code property can be accessed in a type-safe manner */
            res.status(400).json({
                error: {
                    content: "This user already exists"
                },
            });
            return;
        }
    }
}