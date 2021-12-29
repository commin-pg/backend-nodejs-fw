var express = require('express')
var router = express.Router;

// Get users listing 
router.get('/', function (req, res, next) {
    res.send("response with a resource")
})

module.exports = router;