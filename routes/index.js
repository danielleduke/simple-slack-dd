var express = require('express');
var moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var rightnow = moment().format('YYYYMMDD HHmss.SSS')
  res.render('index', { title: 'Express', thedate: rightnow });
});

router.get('/cats', function(req, res, next) {
  var rightnow = moment().format('YYYYMMDD HHmss.SSS')
  res.render('index', { title: 'Cats', thedate: rightnow });
});

module.exports = router;
