/**
 * Created by suranjan on 10/11/14.
 */
define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var TodoModel = Backbone.Model.extend({
		urlRoot:'/todos',

		idAttribute: 'id'

	});

	return TodoModel;
})