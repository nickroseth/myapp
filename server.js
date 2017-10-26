var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_db');


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

var h = require('./handler');

app.get("/", h.getHandler );

console.log(h.otherOne);

var ctrl = require('./api/controllers/toDoListController');

// List tasks
app.get('/tasks', ctrl.list_all_tasks);

// Create task
app.post('/tasks', ctrl.create_task);


/*

/*
var toDoController= require('../api/controllers/toDoListController');

app.get("/",function(req,res){
	res.send("hi");
	console.log(req.get('Content-Type'));
	}
)
*/
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
