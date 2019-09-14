const {mysql} = require('../mysql')

module.exports = async (ctx) => {
  const books = await mysql('user').select()
  ctx.state.data = {
    books
  }
}