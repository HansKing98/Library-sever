var config = require('../config')

var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://' + config.srv + '/' +'Library', {useNewUrlParser: true});

var bookSchema = new mongoose.Schema({
    msg: String
});
// Library 集群 book 集合 默认变复数 books
var Book = mongoose.model('book', bookSchema);

module.exports = function(app) {
    app.get('/weapp/demo', function(req, res) {
        Book.find({},function(err, data) {
            if (err) throw err;
            res.send(data);
        })
    });

    app.get('/todo', function(req, res) {
        Book.find({},function(err, data) {
            if (err) throw err;
            res.render('todo', { todos:data }); // 把 data 数据放入 todoos 中，模板使用            
        })
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        console.log(res.body)
        var itemOne = Book(req.body).save(function (err, data) {
            if (err) throw err;
            // console.log('msg saved');
            res.json(data);
        })
    });

    app.delete('/todo/:msg', function (req, res) {
        // data = data.filter(function (todo) {
        //     return todo.msg.replace(/ /g, "-") !==req.params.msg;
        // });
        Book.find({msg: req.params.msg.replace(/-/g, " ")}).remove(function(err, data) {
            if (err) throw err;
            res.json(data)
        })
    });
}