'use strict';

var TodoModel = require('../../models/TodoModel');

module.exports = function(router) {

	router.get('/', function(req, res) {
		req.model = {};
		TodoModel.getAllItems(function(err, responses){
			if(err) {
				req.model.status = 1;
			} else {
				req.model.status = 0;
				req.model.data = responses;
			}
			res.json(req.model);
		});
	});

	router.post('/', function(req, res) {
		var params = req.body;
		req.model = {};
		TodoModel.saveTodoItem(params, function(err, response){
			if(err) {
				req.model.status = 1;
			} else {
				req.model.status = 0;
				req.model.data = response;
			}
			res.json(req.model);
		});
	});

	router.delete('/:id', function(req, res) {
		var id = req.params.id;
		req.model = {};
		TodoModel.deleteTodoItem(id, function(err){
			if(err) {
				req.model.status = 1;
			} else {
				req.model.status = 0;
			}
			res.json(req.model);
		});
	});
}