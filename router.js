var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: 'Jiawei'},
    {id: 2, name: 'Yuehan'},
    {id: 3, name: "Yijun"},
    {id: 4, name: "Yoyo"}
  ]);
});

module.exports = router;
