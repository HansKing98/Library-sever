const https = require('https')
const {mysql} = require('../mysql')

// "https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+secret+"&js_code="+code+"&grant_type=authorization_code"
module.exports = async (ctx) => {
    const {appid, secret, code, user_info} = ctx.request.query
    var url = "https://api.weixin.qq.com/sns/jscode2session"
    // console.log(appid,secret,code)
    var url = url + "?appid="+ appid +"&secret="+ secret +"&js_code="+ code +"&grant_type=authorization_code"
    const code2session = await getJSON(url)

    ctx.state = {
        data:code2session
    }
}


function getJSON(url) {
    return new Promise((reslove,reject)=>{
        https.get(url,res=>{
            let urlData = ''
            res.on('data', data=>{
                urlData += data
                // console.log('data', data);
                // console.log('urlData', urlData);
            })
            res.on('end', data=>{
                const urlInfo = JSON.parse(urlData)
                if (urlInfo.openid) {
                    reslove(urlInfo)
                }
                reject(urlInfo)
            })
        })
    })
}