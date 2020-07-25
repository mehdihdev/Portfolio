var express = require('express');
var router = express.Router();
var markdown = require("markdown-js");
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('projects');
});


var str = fs.readFileSync("public/iabatios.md", "utf8");

var result = markdown.makeHtml(str);



router.get('/iabatios', function(req, res, next) {
  res.render('iabatios', { result: result })
});

module.exports = router;
