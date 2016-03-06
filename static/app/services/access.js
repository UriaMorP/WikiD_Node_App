"use strict";
const URL = "";



const request = require('superagent');

function loginService(email, password) {
	return new Promise(function(resolve, reject) {
		request.post(URL + '/login')
			.send({
				"email": email,
				"password": password
			}).set('Accept', 'application/json')
			.end((err, res) => {
				resolve(res.text);
				reject(err);
			})
	});
}

function signupService(email, password, name) {
	return new Promise(function(resolve, reject) {
		request.post(URL + '/signup')
			.send({
				"email": email,
				"password": password,
				"name": name
			}).set('Accept', 'application/json')
			.end((err, res) => {
				if (!err) {
					console.log("email, password", email+" " + password);
					resolve({
						"email": email,
						"password": password
					});
				}
				else reject(err)
			})

	})
};


module.exports = {
	loginService,
	signupService
};
