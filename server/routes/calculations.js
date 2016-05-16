var express = require('express');
var router = express.Router();

router.post('/add', function(req, res) {
  console.log('request ', req.body);
  var x = parseInt(req.body.x);
  var y = parseInt(req.body.y);
  var answer = {
    answer : x + y
  };
  res.send(answer);
});

module.exports = router;
