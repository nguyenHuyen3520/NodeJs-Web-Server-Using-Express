// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var todos = ['Đi Chợ','Nấu Cơm','Rửa Bát','Học Tại CoderX'];
app.set("view engine", "pug");
app.set("views", "./views");

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
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
