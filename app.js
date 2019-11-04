// app API BasketDB Service
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
//Routes
var indexRouter = require('./routes/index');
var basketsRouter = require('./routes/baskets');
var morgan  = require('morgan')

// mongoose-morgan
var mongooseMorgan = require('mongoose-morgan');


// Set up mongoose connection
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/test'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error MongoDB")); 
db.once('open', function(callback){ 
    console.log("connexion Exitosa MongoDB!"); 
}) 
  

var app = express();
app.use(morgan('combined'))







app.routes;
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'views')));

app.get('/baskets', basketsRouter);

app.post('/baskets/create.datos',basketsRouter);

app.post('/baskets/details.datos/:id',basketsRouter);

app.put('/baskets/update.datos/:id',basketsRouter);

app.delete('/baskets/delete.datos/:id',basketsRouter);

app.get('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
