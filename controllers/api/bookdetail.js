const {mysql} = require('../../mysql')

module.exports = async (ctx) => {
  const {id} = ctx.request.query
  const detail = await mysql('books')
                        .select()
                        .where('id',id)
                        .first()
  console.log('detail',detail)
  ctx.state.data = Object.assign({}, detail, {
    description : detail.description.split('    ')
  })



  await mysql('books')
            .where('id',id)
            .increment('count',1)
  
}