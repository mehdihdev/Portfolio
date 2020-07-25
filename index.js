var express = require('express');
var secure = require('ssl-express-www');
var markdown = require("markdown-js");
var fs = require("fs");
var path = require('path');
var app = express();

var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/projects', projectsRouter);

app.use(secure);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000);