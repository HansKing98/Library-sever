var config = require('../config')
var request = require('request');
var querystring = require('querystring');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mongoose = require('mongoose');


mongoose.connect('mongodb+srv://' + config.srv + '/' +'Library', {useNewUrlParser: true});
// books
var bookSchema = new mongoose.Schema({
    msg: String
});
// Library 集群 book 集合 默认变复数 books
var Book = mongoose.model('book', bookSchema);

// users 
var userSchema = new mongoose.Schema({
    openid: String,
    session_key: String,
    userInfo:Object
});
var User = mongoose.model('user', userSchema);

module.exports = function(app) {
    app.get('/weapp/demo', function(req, res) {
        Book.find({},function(err, data) {
            if (err) throw err;
            res.send(data);
        })
    });


    app.get('/weapp/jscode2session', function(req, res) {
        console.log('jscode2session 执行。。。');
        var url = 'https://api.weixin.qq.com/sns/jscode2session'
        var data = {
            appid: req.query.appid,
            secret: req.query.secret,
            js_code: req.query.code,
            grant_type: req.query.grant_type
        }
        var content = querystring.stringify(data);
        url = url + '?' + content
        // console.log(url);
        request(url + content , function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body) // 请求成功的处理逻辑
            res.send(body)
            console.log('jscode2session 完成');
          }
        })
    })


    app.get('/weapp/login',async function(req, res) {
        console.log('join 执行。。。');
        if (req.query.openid) {
            const usered =  await User.find({ openid:req.query.openid })
            // console.log(usered);
            // console.log(usered)
            // console.log(usered[0].openid)
            if (usered[0]) {
                console.log('登录成功');
                res.send({code:200, msg:'登录成功'})
            }else{
                
                User({
                    openid: req.query.openid,
                    session_key: req.query.session_key,
                    userInfo:req.query.userInfo
                }).save(function (err, data) {
                    if (err) throw err;
                    console.log('用户添加成功');
                    res.send({code:200, msg:'用户添加成功'})
                })
            }
        }else{
            User.find({},function(err, data) {
                if (err) throw err;
                res.send(data);
            })
        }
        console.log('join 完成');
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