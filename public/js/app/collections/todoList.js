/**
 * Created by suranjan on 10/11/14.
 */
define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var TodoList = Backbone.Collection.extend({
		url:'/todos',
		parse: function(response) {
			return response.data;
		}
	});

	return TodoList;
})