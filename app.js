require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', ()=> {
    console.log('Mongoose Connected')
})
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
  })

var usersRouter = require('./Routes/users');
var MuseRouter = require('./Routes/muses');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + '/client/build'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/api/users', usersRouter);
app.use('/api/users/:userId/muses', MuseRouter);

module.exports = app;
