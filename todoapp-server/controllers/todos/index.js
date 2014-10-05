'use strict';

var TodoModel = require('../../models/TodoModel');

module.exports = function(router) {

	router.get('/', function(req, res) {
		req.model = {};
		req.model.data = { appName: "A simple TODO application" };
		res.json(req.model);
	});

}