define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/todoListView'
], function($, _, Backbone, TodoListView) {
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'todos/:id': 'openTodo',
			//default
			'*actions': 'defaultAction'
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
			var todoListView = new TodoListView();
			todoListView.render();
		},

		defaultAction: function() {
			alert("Invalid Route.")
		}
	});

	var initialize = function() {
		var todoRouter = new TodoRouter();
		todoRouter.start();
	};

	return {
		initialize: initialize
	}

});