var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const cors = require("cors")
require('dotenv').config()

const routerEvents = require('./routes/events.route')
 

var app = express();

app.use(cors("*"))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect("mongodb+srv://aziz:aziz@cluster0.youq0.mongodb.net/Emna?retryWrites=true&w=majority")
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))

app.use('/', routerEvents)
 
module.exports = app;
