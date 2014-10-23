'use strict';

var TodoModel = require('../../models/TodoModel');

module.exports = function(router) {

	router.get('/', function(req, res) {
		var resModel = {};
		TodoModel.getAllItems(function(err, responses){
			if(err) {
				resModel.status = 1;
			} else {
				resModel.status = 0;
				resModel.data = responses;
			}
			res.json(resModel);
		});
	});

	router.post('/', function(req, res) {
		var params = req.body,
			resModel = {};
		TodoModel.saveTodoItem(params, function(err, response){
			if(err) {
				resModel.status = 1;
			} else {
				resModel.status = 0;
				resModel.data = response;
			}
			res.json(resModel);
		});
	});

	router.delete('/:id', function(req, res) {
		var id = req.params.id,
			resModel = {};
		TodoModel.deleteTodoItem(id, function(err){
			if(err) {
				resModel.status = 1;
			} else {
				resModel.status = 0;
			}
			res.json(resModel);
		});
	});

	router.put('/:id', function(req, res) {
		var params = {
				id: req.params.id
			},
			resModel = {};
		params.completed = req.body.completed;
		params.description = req.body.description;
		TodoModel.updateTodoItem(params, function(err){
			if(err) {
				resModel.status = 1;
			} else {
				resModel.status = 0;
			}
			res.json(resModel);
		});
	});
}