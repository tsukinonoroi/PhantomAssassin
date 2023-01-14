var createError = require('http-errors');
var express = require('express');


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/threecats')
var mysql2 = require('mysql2/promise');


var session = require("express-session")
//var MongoStore = require('connect-mongo');
var MySQLStore = require('express-mysql-session')(session);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var phantomsRouter = require('./routes/phantoms');


var app = express();


var options = {
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'phantomassassin'
};
var connection = mysql2.createPool(options)
var sessionStore = new MySQLStore( options, connection);


// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));


// app.use(session({
// secret: "ThreeCats",
// cookie:{maxAge:60*1000},
// store: MongoStore.create({mongoUrl: 'mongodb://localhost/threecats'})
// }))


app.use(session({
secret: 'PhantomAssassin',
key: 'sid',
store: sessionStore,
resave: true,
saveUninitialized: true,
cookie: { path: '/',
httpOnly: true,
maxAge: 60*1000
}
}));

var User = require("./../models/User").User



module.exports = function(req,res,next) {
res.locals.user = null


// User.findById(req.session.user, function (err, user) {
// if (err)
// return next(err)
// res.locals.user = user;
// next();
// })


next();


}

