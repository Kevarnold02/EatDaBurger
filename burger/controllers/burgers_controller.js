/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	burgers.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function(req, res) {
	burgers.create(['burger_name'], [req.body.name], function(data) {
		res.redirect('/burger')
	});
});

// router.post('/burgers/create', function(req,res) {
// 	burgers.create(['burger_name', 'devoured', 'date'], [req.body.burger_name, req.body.devoured, req.body.date], function(data){
// 		res.redirect('/burgers')
// 	});
// });

// router.put('/burgers/update/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	burger.update({'sleepy' : req.body.sleepy}, condition, function(data){
// 		res.redirect('/burgers');
// 	});
// });

// router.delete('/burgers/delete/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	burger.delete(condition, function(data){
// 		res.redirect('/burgers');
// 	});
// });

module.exports = router;
