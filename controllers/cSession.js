const time = require('time-formater')
const {mysql} = require('../mysql')

module.exports = async (ctx) => {
    const {openid, session_key, user_info} = ctx.request.query
    const findRes = await mysql('cSessionInfo')
                        .select()
                        .where('openid', openid)
    console.log('findRes',findRes)
    if (findRes.length) {
        ctx.state = {
            code: -1,
            data:{
                msg:'cSession update success'
            }
        }
        const last_vist_time = time().format('YYYY-MM-DD HH:mm:ss')
        await mysql('cSessionInfo').where('openid', '=', openid)
                                    .update({
                                        last_vist_time
                                    })
        // return 结束 好像是断点 类似break
        return
    }

    await mysql('cSessionInfo').insert({
        openid, session_key, user_info
    })

    ctx.state.data = {
        msg:'cSession add success'
    }   
}
