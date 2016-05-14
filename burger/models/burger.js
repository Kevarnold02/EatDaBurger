/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burgers = {
	all: function(cb) {
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('burgers', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('burgers', condition, function(res){
			cb(res);
		});
	}
};

module.exports = burgers;

// burger.delete(condition, function(data){
// 	res.redirect('/burgers');
// });
