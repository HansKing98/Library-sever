/**
 * web 路由集合
 */
const router = require('koa-router')({
  prefix: '/web'
})

const controllers = require('../controllers/web')

// Auth 授权路由组
router.get('/html', controllers.html)

module.exports = router
