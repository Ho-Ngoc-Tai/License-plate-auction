var express = require('express')
var UserService = require('../service/UserService')
var UserRoutes = require('./user.router')

let router = express.Router()

router.get('', (request, response) => {
    response.send('Chào mưng đến trang quản lý')
})

router.get('/requestes', (request, response) => {
    
})

router.use('/users', UserRoutes)

router.get('/categories', (request, response) => {

})

module.exports = router;