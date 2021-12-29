const express = require('express')
const router = express.Router()

const controller = require('./users.controller');


router.get('/', controller.users)
router.get('/list', controller.user_list)

module.exports = router;


