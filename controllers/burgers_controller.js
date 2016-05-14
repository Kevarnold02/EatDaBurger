/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	burgers.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res) {
	burgers.create(['burger_name'], [req.body.burger_name], function(data) {
		res.redirect('/burgers')
	});
});

router.post('/burgers/devour', function(req,res) {
	burgers.update(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burgers.update({'devoured' : true}, condition, function(data){
		res.redirect('/burgers');
	});
});

// router.delete('/burgers/delete/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	burgers.delete(condition, function(data){
// 		console.log(data);
// 		res.redirect('/burgers');
// 	});
// });

module.exports = router;
