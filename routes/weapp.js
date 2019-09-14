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

router.get('/bookdetail', controllers.bookdetail)

router.get('/top', controllers.top)

module.exports = router
