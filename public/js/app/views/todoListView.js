define([
	'jquery',
	'underscore',
	'backbone',
	'text!/templates/partials/todo.html'
], function($, _, Backbone, todoListTemplate){
	var TodoListView = Backbone.View.extend({
		//top level element
		el: $('#container'),
		template : _.template( todoListTemplate ),
		render: function() {
			var model = {id: 2, description: 'hello'};
			this.$el.append(this.template(model));
		}
	});

	return TodoListView;

})