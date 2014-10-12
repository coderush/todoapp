define([
	'jquery',
	'underscore',
	'backbone',
	'text!/templates/partials/todo.html',
	'app/collections/todoList'
], function($, _, Backbone, todoListTemplate, TodoList){
	var TodoListView = Backbone.View.extend({

		//top level element
		el: $('#container'),

		template : _.template( todoListTemplate ),

		initialize: function() {
			this.collection.on('add', this.addOne, this);
		},

		render: function() {
			this.collection.forEach(this.addOne, this);
		},

		addOne: function(model) {
			this.$el.append(this.template(model.toJSON()));
		}
	});

	return TodoListView;

})