"use strict";

function login(req, res) {
	global.db.collection('users').findOne({
			email: req.body.email
		})
		.then((d) => {
			console.log("found: ", d );
			if (!d) {
				res.status(500).send('user not found');
			} else{
				// generate and send token;
				if(req.body.password === d.password)
				var token = ":)";
				res.status(200).send(token);
			}
		})
		.catch((err) => res.status(500).send('internal error'));
}

function signup(req, res) {
	console.log(req.body.email);
	global.db.collection('users').findOne({
			email: req.body.email
		})
		.then((d, e) => {
			if (!d) {
				console.log("new mail address");
				global.db.collection('users').save({
					email: req.body.email,
					name: req.body.name,
					password: req.body.password,
					date: new Date()
				})
				.then(s=>res.status(200).send('ok'))
				.catch(e=>res.status(500).send('db error'))
			} else{
				res.status(500).send('email already exists');
			}
		})
}

module.exports = {
	login,
	signup
};
