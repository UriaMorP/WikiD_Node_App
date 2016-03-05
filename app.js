'use strict';
const express = require('express');
var app = express();
const path = require('path');
const https = require('https');
const url = require('url');
const bodyParser = require('body-parser');
global.request = require('request');
let MongoClient = require('mongodb').MongoClient;
const log4js = require('log4js');
	//log the cheese logger messages to a file, and the console ones as well.
log4js.configure({
	appenders: [{
		type: "file",
		filename: "logger.log",
		category: ['logger', 'console']
	}, {
		type: "console"
	}],
	replaceConsole: true
});
global.logger = log4js.getLogger('console');


app.use('/', express.static(__dirname + '/static'));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
	if (err) {
		console.error(err);
		fs.readFile(__dirname + '/static/500.html', function(err, html) {
			res.writeHead(500, {
				'Content-Type': 'text/html',
				'Content-Length': html.length
			});
			res.write(html);
			res.end();
		});
		console.error("[Request Error]: " + err);
	}
});

app.all('/*', function(req, res, next) {
	res.removeHeader("x-powered-by");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Credentials", true);
	next();
});

let DEVELOPMENT_PORT = 5000;
let DEPLOYMENT_PORT = process.env.PORT;
const PORT = DEPLOYMENT_PORT ? DEPLOYMENT_PORT : DEVELOPMENT_PORT;

global.MongoClient = MongoClient;
global.MONGO_URL = 'mongodb://localhost/WikiDApp';

MongoClient.connect(global.MONGO_URL, (err, db) => {
	global.db = db;
	app.post('/login', require("./api/user/access").login);
	app.post('/signup', require("./api/user/access").signup);

});



let server = require('http').Server(app);
server.listen(PORT);
