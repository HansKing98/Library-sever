var request = require('request');
var { getOpenid } = require('../utils');
var querystring = require('querystring');
const use = {}
use.getOpenid = function () {
    return new Promise((reslove, reject) => {
        // 获取openid
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
            reslove(body)
            }
        })
    })
}
