var createError = require('http-errors');
var express = require('express');
const dotenv = require("dotenv");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const passport = require('passport')
const {initializingPassport} = require('./passportConfig')
const session = require('express-session');
const db = require('./db/db')

var webRouter = require('./routes/web')


var app = express();
dotenv.config();

initializingPassport(passport);

//body parser call
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Session call
app.use(session({
  secret: 'fjmhjrgjmgjmry',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure and maxAge accordingly
}));




app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', webRouter);


db();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    // console.log(`Server Running on http://127.0.0.1:${PORT}`)
    console.log(`Server running on http://localhost:${PORT}`)
});

module.exports = app;
