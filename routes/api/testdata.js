var express = require('express');
var router = express.Router();

/* GET testdata listing. */
router.get('/', function (req, res, next) {
  res.json([
    { id: 1, name: 'steven' },
    { id: 2, name: 'john' },
    { id: 3, name: 'jeff' },
  ]);
});

module.exports = router;