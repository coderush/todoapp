define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/todoListView',
	'app/collections/todoList'
], function($, _, Backbone, TodoListView, TodoList) {
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'todos/:id': 'openTodo',
			//default
			'*actions': 'defaultAction'
		},

		initialize: function() {
			this.todoList = new TodoList();
			this.todoListView = new TodoListView({collection : this.todoList});
		},

		start: function() {
			//start backbone history
			Backbone.history.start({'pushState': true});
		},

		openTodo: function() {
			//Open a single item
		},

		index: function() {
			//render the index page
			this.todoList.fetch();
		},

		defaultAction: function() {
			alert("Invalid Route.")
		}
	});

	var initialize = function() {
		var todoRouter = new TodoRouter();
		todoRouter.start();
		$(document).ready(function(){
			todoRouter.trigger('');
		});
	};

	return {
		initialize: initialize
	}

});