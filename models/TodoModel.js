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
 * Save new item to mongo db.
 * @param params input params
 * @param callback
 */
exports.saveTodoItem = function saveTodoItem(params, callback) {
	var todoData,
		newTodo;

	todoData = {
		description: params.description,
		completed: params.completed || false
	};
	var newTodo = new MongooseTodoModel(todoData);
	newTodo.save(function(err, document){
		if (err) {
			callback(err);
		} else {
			callback(err, document);
		}
	});
};

exports.getAllItems = function getAllItems(callback) {
	MongooseTodoModel.find(function(err, response){
		if (err) {
			callback(err);
		} else {
			callback(null, response);
		}
	});
};

exports.deleteTodoItem = function deleteTodoItem(id, callback) {
	MongooseTodoModel.remove({id : id}, function(err){
		if (err) {
			callback(err);
		} else {
			callback(null);
		}
	});
};

exports.updateTodoItem = function updateTodoItem(params, callback) {
	var toUpdate = {};
	if(params.completed != undefined) {
		toUpdate.completed = params.completed;
	}
	if(params.description != undefined) {
		toUpdate.description = params.description;
	}

	MongooseTodoModel.findOneAndUpdate({id : params.id}, toUpdate, function(err){
		if(err) {
			callback(err);
		} else {
			callback(null);
		}
	});
}
