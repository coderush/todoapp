/**
 * Created by suranjan on 10/11/14.
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'../models/todo'
], function($, _, Backbone, TodoModel){

	var TodoList = Backbone.Collection.extend({
		url:'/todos',

		model: TodoModel,

		parse: function(response) {
			return response.data;
		}
	});

	return TodoList;
})