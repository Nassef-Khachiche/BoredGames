const { prisma } = require("../../prisma/connection");
const bcrypt = require('bcrypt');

// const session = require("express-session");

exports.login = async (req, res) => {

	// let id = req.session.user_id

	let {
		email,
		password
	} = req.body


	try {

		// check if password and email are in database > let them in | else give a message saying something went wrong
		const user = await prisma.users.findUnique({

			where:{
				email: email
			},
			select: {
				email: true,
				password: true,
				firstname: true,
				lastname: true
			},
		});


		// if email is wrong
		if (user == null) {
			res.status(400).json({
				error: {
					content: "E-mail does not exist"
				}
			})
		}

		// compare hashed password
		const match = await bcrypt.compare(password, user.password);

		if (match && user.email == email) {

			req.session.firstname = user.firstname;
			req.session.lastname = user.lastname;

			console.log(req.session);
			req.session.save();

			// Debug
			// res.status(200).json({  message: 'Login complete!' })

            res.redirect('/dashboard');

			return;

		} else {
			res.status(400).json({ message: 'Wrong password!' })
			return;
		}
	} catch (error) {
		return;
	}

}

exports.logout = async (req, res) => {
	req.session.destroy();
	
	res.status(200).json({ message: "You've logged out", status: true })
}