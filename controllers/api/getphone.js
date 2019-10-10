var request = require("request");

module.exports = async (ctx) => {
    const {name,school} = ctx.request.query
    if (school) {
        var schoolid = 51000
    }else{
        var schoolid = school
    }
    var options = {
        // url : "http://mgr.v1.mzwxy.cn/admin/base._student/studentlist.html?school_id%3D"+ schoolid+"%26name%3D"+name +"graduate_date%3D2%26departments_id%3D0%26departments_id2%3D0%26grade_id%3D0%26pagelimit%3D",
        url : "http://mgr.v1.mzwxy.cn/admin/base._school/schfunlist.html?id=51000",
        headers:{
            // 'Cookie': 'PHPSESSID=prehs0nc3b37gidhdh3fgikunv; pgv_pvi=7852337152; pgv_si=s5006465024; wxyuser_id=4833; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E7%BA%A7%E6%A0%A1%E5%9B%AD%E5%B7%A5%E4%BD%9C%E7%AB%99'
            'Cookie': 'PHPSESSID=prehs0nc3b37gidhdh3fgikunv; pgv_pvi=7852337152; pgv_si=s5006465024; wxyuser_id=4991; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E6%A0%A1%E5%B7%A5%E4%BD%9C%E7%AB%9902'
        }
    }

    const Daan = await getDaan(options)

    ctx.state = {
        code:200,
        data:Daan
    }


}

function getDaan(options) {
    return new Promise((reslove,reject)=>{
        request.get(options, (err, response, body) =>{
            if (0) {
                console.log(response);
                
                // reslove(JSON.parse(response.body).data)
                reslove(response)
                
            }else{
                // reject('错误...')
                reject(err)
            }
        })
    })
}