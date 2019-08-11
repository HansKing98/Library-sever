var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

app.set('view engine', 'ejs');

// 静态类 直接访问
app.use(express.static('./public'));

todoController(app);

app.listen(5757);

console.log('You are listening to port 5757');