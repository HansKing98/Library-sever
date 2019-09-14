const http = require('http')
const {mysql} = require('../../mysql')

// 新增图书
// 1.获取豆瓣信息
// 2.
// http://bookapi.hansking.cn/?isbn=9787115470317
module.exports = async (ctx)=>{
    const {ISBN, openid} = ctx.request.body
    // ISBN 不能和 await 里的 isbn 相同 限制性异步里面的 isbn
    // 所以传过来的是 ISBN 
    // if (isbn && openid) {
    if ( ISBN ) {
        const findRes = await mysql('books')
                            .select()
                            .where('isbn', ISBN)
        if (findRes.length) {
            ctx.state = {
                code: -1,
                data:{
                    msg:'图书已存在'
                }
            }
            // return 结束 好像是断点 类似break
            return
        }
        var url = 'http://bookapi.hansking.cn/?isbn=' + ISBN
        const bookinfo = await getJSON(url)
        let author = ''
        for (let index = 0; index < bookinfo.author.length; index++) {
            author += bookinfo.author[index].name
        }
        
        const { title, image, alt, publisher, published, price, rate, designed, isbn, description, comments } = bookinfo
        console.log(author);
        try {
            await mysql('books').insert({
                openid, title, author, image, alt, publisher, published, price, rate, designed, isbn, description, comments
            })
            ctx.state.data = {
                    title,
                    msg:'success'
            }
        } catch (error) {
            ctx.state = {
                code:-1,
                data:{
                    msg:'新增失败'+error.sqlMessage
                }
            }
        }

    }


}

function getJSON(url) {
    return new Promise((reslove,reject)=>{
        http.get(url,res=>{
            let urlData = ''
            res.on('data', data=>{
                urlData += data
                // console.log('data', data);
                // console.log('urlData', urlData);
            })
            res.on('end', data=>{
                const bookinfo = JSON.parse(urlData)
                if (bookinfo.title) {
                    reslove(bookinfo)
                }
                reject(bookinfo)
            })
        })
    })
}