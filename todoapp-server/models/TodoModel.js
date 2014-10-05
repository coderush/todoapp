var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	autoIncrement = require('mongoose-auto-increment');

//connect to monogo database
var connection = mongoose.connect('mongodb://localhost/todos');
//initialize auto increment
autoIncrement.initialize(connection);

//define schema
var todoSchema = new Schema({
	id : Number,
	description : String,
	date: { type: Date, default: Date.now },
	completed: Boolean
});

//set auto increment on field id
todoSchema.plugin(autoIncrement.plugin, { model : 'TODO', field : 'id' });

//create model using defined schema
var MongooseTodoModel = mongoose.model('TODO', todoSchema);

//public function starts here

/**
 *  Save new item to mongo db
 * @param params input params
 * @param callback
 */
module.exports = function saveTodoItem(params, callback) {
	var todoData,
		newTodo;

	todoData = {
		description: params.description,
		completed: false
	};
	var newTodo = new MongooseTodoModel(todoData);
	newTodo.save(function(err, document){
		if(err) {
			callback(err);
		} else {
			callback(err, document);
		}
	});
}
