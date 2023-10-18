var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')
var mailer = require('express-mailer')
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

require('dotenv').config()
var product = require('./apiController/ProductController')
var user = require('./apiController/UserController')

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/frontend/layouts/index.html');
});

app.use('/product', product)

io.on('connection', function (socket) {
    console.log('a user connected');
});
http.listen(process.env.DB_PORT, () => {
    console.log("server running at port ", process.env.DB_PORT)
})