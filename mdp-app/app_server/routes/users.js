var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user detail by id. */
router.get('*/:id*', function(req, res, next) {
  // mengambil parameter id dari URL
  const userId = req.params.id;

  // mengembalikan data user dengan idtertentu
  res.send(`respond with details of user ${userId}`);

});

/* POST Create a new user. */
router.post('/', function(req, res, next) {
  const newUser = req.body;
  res.status(201).send("New User Created");
});






module.exports = router;
