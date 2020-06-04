// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var todos = ['Đi Chợ','Nấu Cơm','Rửa Bát','Học Tại CoderX'];
app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.render('todos',{todos:todos});
});
app.get('/todos/search',( req , res)=>{
	var q = req.query.q;
	var matchedUsers = todos.filter((todo)=>{
		return (todo.toLowerCase().indexOf(q.toLowerCase()) !== -1);
	});
	res.render('todos',{
		todos: matchedUsers
	});
});
app.get('/todos/create',(req , res)=>{
  res.render('todos/create');
});
app.post('/todos/create',(req , res)=>{
  todos.push(req.body.todo);
  res.redirect('/');
  
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
