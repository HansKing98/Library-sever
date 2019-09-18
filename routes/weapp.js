/**
 * weapp 路由集合
 */
const router = require('koa-router')({
  prefix: '/weapp'
})

const controllers = require('../controllers/weapp')

// Auth 授权路由组
router.get('/html', controllers.html)
router.post('/addbook', controllers.addbook)
router.get('/booklist', controllers.booklist)
router.get('/mybooklist', controllers.mybooklist)
router.get('/bookdetail', controllers.bookdetail)
router.get('/douban', controllers.douban)
router.get('/top', controllers.top)


// Wx 路由组
router.get('/code2Session', controllers.code2Session)
router.get('/cSession', controllers.cSession)

module.exports = router
