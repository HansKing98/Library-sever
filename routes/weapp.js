/**
 * weapp 路由集合
 */
const router = require('koa-router')({
  prefix: '/weapp'
})

const controllers = require('../controllers/')
const Weapp = controllers.weapp

// Auth 授权路由组
router.get('/html', Weapp.html)

router.post('/addbook', Weapp.addbook)

router.get('/booklist', Weapp.booklist)

router.get('/bookdetail', Weapp.bookdetail)

router.get('/top', Weapp.top)

module.exports = router
