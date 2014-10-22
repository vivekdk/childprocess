var express 		 = require('express');
var MongoClient 	 = require('mongodb').MongoClient;
var http 			 = require('http');
var async 			 = require('async');

var _mongoConn;
var app;
var cp;

async.series ([

		// Setup express
		function (fn1){
			app 				= express();
			http.createServer(app).listen(6500);
			fn1 (null);			
		},

		// Load/Require local modules
		function(fn2){
			// 
			cp = require ('./lib/childprocess.js') (app);
			fn2 (null);
		}
	], 
	function (err, results){
		if (err)
			console.error('Error initializing the server');
		else{			
			console.log('Server initialized');

			app.route ('/childprocess')
			   .post  (cp.childprocess);
		}
	})