const express = require('express');
const app = express();
const cors = require('cors');
const https =require('https');
const fs = require('fs');
const db = require('./models');
const { User, Category } = require('./models');
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    next();
  });

app.use(express.json());
app.use(cors({
    origin: ["https://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true }));
app.use(session({
    key: "userId",
    secret: "tempsecret",
    resave: false,
    saveUninitialized:false,
    cookie: {
        expires: 60 * 60 * 8,
    },
}));

// Routers
const itemRouter = require('./routes/Items');
app.use("/items", itemRouter);
const bidRouter = require('./routes/Bids');
app.use("/bids", bidRouter);
const userRouter = require('./routes/Users');
app.use("/auth", userRouter);
const mailRouter = require('./routes/Mail');
app.use("/mail", mailRouter);
const categoryRouter = require('./routes/Categories');
app.use("/categories", categoryRouter);
const historyRouter = require('./routes/History');
app.use("/history", historyRouter);
const photographyRouter = require('./routes/Photos');
app.use("/photos", photographyRouter);
app.use('/images/', express.static('images'));

// Create the ssl server
const sslServer = https.createServer({
    key: fs.readFileSync('C:/Users/Admin/key.pem'),
    cert: fs.readFileSync('C:/Users/Admin/cert.pem'),
}, app);

// listen on port 5555 creating the tables in models in the process
db.sequelize.sync({ force: false, alter:true}).then(()=>{
    console.log("Encrypted server up and running\nConnected to database");

    // create the admin, if they do not already exist
    const password="1234";
    bcrypt.hash(password, 10).then((hash)=>{
        User.create({
            username: "admin",
            password: hash,
            name: "admin",
            admin: true,
            approved: true,
        }).catch(err => {
            console.log("Already exists");
        });
    });

    // Creating the basic "parent" category of the app
    Category.create({
        name: "All Categories",
    }).catch(err => {
        console.log("Already set up");
    });

    sslServer.listen(5555, ()=>{
        console.log("Listening on port: 5555");
    });
});
