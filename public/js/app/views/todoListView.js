define([
	'jquery',
	'underscore',
	'backbone',
	'text!/templates/partials/todo.dust',
	'app/collections/todoList',
	'app/models/todo'
], function($, _, Backbone, todoListTemplate, TodoList, TodoModel){
	var TodoListView = Backbone.View.extend({

		//top level element
		el: $('#todos'),

		events: {
			'keypress .add-todo' : 'addTodo'
		},

		template : _.template( todoListTemplate ),

		initialize: function() {
			this.collection.on('add', this.addOne, this);
		},

		addTodo: function(event) {
			if(event.keyCode === 13) {
				var newTodo,
					todoModel,
					self = this;

				newTodo = $(event.currentTarget).val();
				todoModel = new TodoModel();
				todoModel.set('description', newTodo);

				todoModel.save(todoModel.toJSON(), {
					success: function(){
						// model was saved successfully, now add it to the collection
						self.collection.add(todoModel.get('data'));
					},
					error: function(){
						alert('failed to add todo');
					}
				});
			}
		},

		render: function() {
			this.collection.forEach(this.addOne, this);
		},

		addOne: function(model) {
			this.$el.find('#todos-list').append(this.template(model.toJSON()));
		}
	});

	return TodoListView;

})