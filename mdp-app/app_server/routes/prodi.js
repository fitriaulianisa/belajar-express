var express = require('express');
var router = express.Router();

// import controller
const prodiController = require('../controllers/prodiControllers')

router.get('/', prodiController.index)


module.exports = router;