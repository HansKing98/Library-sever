const router = require('koa-router')({
  prefix: '/api'
})

const controllers = require('./controllers')

const weapp = controllers.weapp

router.get('/html', controllers.html)

router.post('/addbook', controllers.addbook)

router.get('/booklist', controllers.booklist)

router.get('/bookdetail', controllers.bookdetail)

router.get('/top', controllers.top)


router.get('/weapp', weapp.html)

// Wx API
router.get('/code2Session', controllers.code2Session)
router.get('/cSession', controllers.cSession)

module.exports = router