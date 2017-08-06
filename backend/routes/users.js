var UserController = require('../controllers/user-controller');
var express = require('express');
var Auth = require('./auth-middleware');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  var user = UserController.login(username, password);
  if (user) {
    req.session.username = user.username;
    req.session.userid = user.id;
  }
  res.send(user);
});

router.post('/register', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  var result = UserController.register(username, password);
  res.send(result);
});

router.post('/pingUserSession', function(req, res, next){
  res.send(UserController.getUser(req.session.userid));
});

router.post('/logout', Auth.isAuthenticated, function(req, res, next){
  req.session.destroy();
  res.send(true);
});

module.exports = router;
