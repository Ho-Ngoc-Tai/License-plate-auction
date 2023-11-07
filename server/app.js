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


var AuthRouter = require('./router/auth.router')
var AdminRouter = require('./router/admin.router')
var product = require('./Controller/ProductController')
var user = require('./Controller/UserController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.set('view engine', 'ejs')

mailer.extend(app, {
    from: process.env.EMAIL_FROM,
    host: process.env.MAIL_HOST, // hostname
    secureConnection: process.env.EMAIL_SECURE, // use SSL
    port: process.env.EMAIL_PORT, // port for secure SMTP
    transportMethod: process.env.EMAIL_TRANSPORT_METHOD, // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: process.env.EMAIL_AUTH_USERNAME,
        pass: process.env.EMAIL_AUTH_PASSWORD
    }
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/frontend/layouts/index.html');
});

app.get('/single', function (req, res) {
    res.sendFile(__dirname + '/views/frontend/layouts/single.html');
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/views/frontend/layouts/login.html');
});

app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/views/frontend/layouts/register.html');
});

app.use('/auth', AuthRouter)
app.use('/admin', AdminRouter)
app.use('/product', product)
app.use('/user', user)
io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(process.env.DB_PORT, () => {
    console.log("server running at port ", process.env.DB_PORT)
})
