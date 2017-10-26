'use strict';

var Task = require('../models/toDoListModels');

//module.exports.create_a_task = function(req, res) {
    

module.exports.create_task = function(req,res) {
    var task = new Task({status:"ongoing"})
    task.save().then(function(result){
        res.send(result);
    });
}

module.exports.update_task = function(req,res) { 
    var task = Task({req})
    task.save().then(function(result){
        res.send(result);
    });
}

module.exports.delete_task = function(req,res) { 
    var task = Task({req})
    task.save().then(function(result){
        res.send(result);
    });
}

/*
};



/*
(function(err,createdTodoObject) {
	if(err) {
		res.send(err);
	}
	res.send(createdTodoObject);
});

todo.update_a_task() {
	var response = {
		message: "Todo successfully updated"
	id: todo._id
	};
	res.send(response);
});


todo.delete_a_task (){
	var response = {
		message: "Todo successfully deleted",
	id:todo._id
	};
	res.send(response);
});

*/



module.exports.list_all_tasks = function(req, res) {
    Task.find().then(function(docs){
        console.log(docs);
        res.send(docs);
    });
};





