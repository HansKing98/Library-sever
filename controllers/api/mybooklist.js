const {mysql} = require('../../mysql')

module.exports = async (ctx) => {
  const {page, openid} = ctx.request.query
  const size = 10
  const books = await mysql('books')
                  .select('books.*','cSessionInfo.user_info')
                  .join('cSessionInfo','books.openid','cSessionInfo.openid')
                  .limit(size)
                  .offset(Number(page) * size)
                  .where({'books.openid':openid})
                  .orderBy('books.id',"desc")
  ctx.state.data = {
    list: books.map(v=>{
      const info = JSON.parse(v.user_info)
      return Object.assign({},v,{
        user_info:{
          nickName:info.nickName
        }
      })
    })
  }
}