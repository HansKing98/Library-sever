var request = require("request");

module.exports = async (ctx) => {
    const {id} = ctx.request.query
    var timuID = id
    var options = {
        // url : "http://api.hansking.cn/show",
        url : "http://mgr.v1.mzwxy.cn/admin/activity2/see_one_question.html?id="+timuID,
        headers:{
            // 'Cookie': 'PHPSESSID=prehs0nc3b37gidhdh3fgikunv; pgv_pvi=7852337152; pgv_si=s5006465024; wxyuser_id=4833; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E7%BA%A7%E6%A0%A1%E5%9B%AD%E5%B7%A5%E4%BD%9C%E7%AB%99'
            // 'Cookie':'pgv_pvi=7852337152; PHPSESSID=chg8bifge83cq95ns56n585k20; pgv_si=s2744220672; wxyuser_id=4991; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E6%A0%A1%E5%B7%A5%E4%BD%9C%E7%AB%9902'
            // 'Cookie':'pgv_pvi=7852337152; PHPSESSID=nf0gdat45t90l5fbdijp5jt6bd; pgv_si=s555548672; wxyuser_id=4991; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E6%A0%A1%E5%B7%A5%E4%BD%9C%E7%AB%9902'
            // 'Cookie':'pgv_pvi=7852337152; PHPSESSID=ifcen8nibr96vo77m1h1mavjet; pgv_si=s2860854272; wxyuser_id=4991; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E6%A0%A1%E5%B7%A5%E4%BD%9C%E7%AB%9902'
                'Cookie':'pgv_pvi=7852337152; PHPSESSID=34aloru9s60k423e5uk5hb43sa; pgv_si=s9593246720; wxyuser_id=4991; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E6%A0%A1%E5%B7%A5%E4%BD%9C%E7%AB%9902'
        }
    }
    // request.get(options, function(err, response, body){
    //     console.log(response.body);
    //     global.daan = '123'
    // });

    // ctx.state = {
    //     data:global.daan
    // }
    const Daan = await getDaan(options)

    ctx.state = {
        code:200,
        data:Daan
    }


    // 
    function getDaan(options) {
        return new Promise((reslove,reject)=>{
            request.get(options, (err, response, body) =>{
                if (response.statusCode === 200) {
                    reslove(JSON.parse(response.body).data)

                }else{
                    reject('错误...')
                }
            })
        })
    }
    // 
}

// module.exports = async (ctx) => {
//     var endID = 84667
//     var startID = 84529
//     // var startID = 84654
//     for (var timuID = startID; timuID <= endID; timuID++) {
//         // var timuID = 84529
//         var options = {
//             // url : "http://api.hansking.cn/show",
//             url: "http://mgr.v1.mzwxy.cn/admin/activity2/see_one_question.html?id=" + timuID,
//             headers: {
//                 // 'Cookie': 'PHPSESSID=prehs0nc3b37gidhdh3fgikunv; pgv_pvi=7852337152; pgv_si=s5006465024; wxyuser_id=4833; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E7%BA%A7%E6%A0%A1%E5%9B%AD%E5%B7%A5%E4%BD%9C%E7%AB%99'
//                 // 'Cookie': 'pgv_pvi=7852337152; PHPSESSID=ifcen8nibr96vo77m1h1mavjet; pgv_si=s2860854272; wxyuser_id=4991; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E6%A0%A1%E5%B7%A5%E4%BD%9C%E7%AB%9902'
//                 'Cookie':'pgv_pvi=7852337152; PHPSESSID=34aloru9s60k423e5uk5hb43sa; pgv_si=s9593246720; wxyuser_id=4991; wxyuser_name=%E5%A4%A9%E6%B4%A5%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%B6%85%E6%A0%A1%E5%B7%A5%E4%BD%9C%E7%AB%9902'
//             }
//         }
//         request.get(options, function (err, response, body) {
//             console.log(response.body, ',');
//         });
//     }


//     ctx.state = {
//         data: '123'
//     }
// }

