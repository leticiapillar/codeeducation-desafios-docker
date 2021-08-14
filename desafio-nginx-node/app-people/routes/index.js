var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Full Cycle' });

  const sql = `INSERT INTO people(name) values('Leticia ${Math.floor(Math.random() * 100)}')`
  dbConn.query(sql)

  dbConn.query('SELECT * FROM people ORDER BY id desc', function(err,rows) {
    if(err) {
      req.flash('error', err);
      res.render('index',{data:''});   
    } else {
      res.render('index',{title: 'Full Cycle', data: rows});
    }
  });

});

module.exports = router;
