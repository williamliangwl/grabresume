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
  var user = null;
  var message = '';

  if (username.length === 0 || password.length === 0) {
    message = 'All fields are required';
  }
  else {
    user = UserController.login(username, password);

    if (user) {
      req.session.username = user.username;
      req.session.userid = user.id;
      user = user.getData();
    }
    else {
      message = 'Invalid combination of username and password';
    }
  }

  res.send({ user, message });
});

router.post('/register', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var user = null;
  var message = '';

  if (username.length === 0 || password.length === 0) {
    message = 'All fields are required';
  }
  else {
    user = UserController.register(username, password);

    if (user) {
      req.session.username = user.username;
      req.session.userid = user.id;
      user = user.getData();
    }
    else {
      message = 'Failed registration';
    }
  }

  res.send({ user, message });
});

router.post('/pingUserSession', function(req, res, next){
  var user = UserController.getUser(req.session.userid);
  user = user? user.getData(): user;
  var message = '';

  res.send({ user, message });
});

router.post('/logout', Auth.isAuthenticated, function(req, res, next){
  req.session.destroy();
  res.send(true);
});

module.exports = router;
