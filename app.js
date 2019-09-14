const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const response = require('./response.js')
const app = new Koa()

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyparser())

const router = require('./routes')
app.use(router.routes())
// 
const weAppRouter = require('./routes/weapp')
app.use(weAppRouter.routes())

// 启动程序，监听端口
app.listen(5757, () => {
  console.log('localhost:5757,服务器启动成功')
})