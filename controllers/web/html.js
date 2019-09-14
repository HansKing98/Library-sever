const {mysql} = require('../../mysql')

module.exports = async (ctx) => {
  ctx.state.data = {
    msg:'welecome to koa'
  }
}