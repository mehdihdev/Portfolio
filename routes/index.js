var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mehdi's Portfolio" });
});

router.get('/contact', function(req,res,next) {
  res.render('contact')
});

router.get('/admin', function(req, res, next) {
  res.render('admin')
});

router.get('/store/:item', function(req, res, next) {
  res.render(req.param('item'))
  //res.send(req.param('item'));
});



module.exports = router;