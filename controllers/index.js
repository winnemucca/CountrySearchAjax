var country = require("../models/countries.json");
var _ = require('underscore');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countries: function(req,res) {
		// console.log('countriesarray:',country);
		res.send(country);
	},
	search: function(req,res) {
		// var search = _.find(country,function(string){
		// 	return 
		// })
		var userSearch = req.body;
		// console.log(userSearch);
		// var fixedCountry = country.name.toUpperCase();

		var search = _.where(country,userSearch);
		console.log('search',search[0].name);

		var countrySearch =[];
		countrySearch.push(search);

		// console.log('usersearch',req.body);
		// console.log('req.query',req.query);
		// var userSearch = req.body;
	
		// *************************
		for(var i =0; i<country.length;i++) {
			if(country[i].name === search[0].name) {
			countrySearch.push(country[i]);
			}
			
		}
		console.log('array',countrySearch);
		res.send(search);
	},
	hasVisited: function(req,res) {
		if(req.body.hasVisited) {
			// country.push()
		}
		else {
			req.body.notVisited
		}

	}
};

module.exports = indexController;