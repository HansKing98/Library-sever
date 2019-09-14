const router = require('koa-router')()

const controllers = require('../controllers/web')
const uploader = require('../tools/uploader')

// Upload 图片上传路由组
router.post('/uploadImg', async (ctx, next) => {
  const uploadResult = await uploader(ctx.req)
  ctx.body = {
    errno: 0,
    data: [
      uploadResult.imgUrl
    ]
  }
  await next()
})

// Auth 授权路由组
router.get('/auth', controllers.auth)
router.get('/auth/:key', controllers.auth)

// QrCode 路由组
router.get('/qrcode/:page/:scene', controllers.qrcode)

// Excel 路由组
router.get('/excel/multi/:examids', controllers.excel)
router.get('/excel/:examid', controllers.excel)

module.exports = router
