var ResumeController = require('../controllers/resume-controller');
var UserController = require('../controllers/user-controller');
var Auth = require('./auth-middleware');
var express = require('express');
var router = express.Router();

/* GET resumes listing. */
router.get('/', Auth.isAuthenticated, function(req, res, next) {
  var user = UserController.getUser(req.session.userid);

  var resumes = ResumeController.getAllUserResumes(user);
  res.send(JSON.stringify(resumes));
});

router.get('/getResume/:resumeId', function(req, res, next) {
  var resumeId = req.params.resumeId;
  var resume = ResumeController.getResume(resumeId);
  res.send(JSON.stringify(resume));
});

router.post('/uploadResumeDetails', Auth.isAuthenticated, function(req, res, next){
  var jobTitle = req.body.jobTitle;
  var jobDesc = req.body.jobDesc;
  var company = req.body.company;
  var user = UserController.getUser(req.session.userid);

  if (user) {
    var resumeId = ResumeController.addResume(user, jobTitle, jobDesc, company);
    res.send(resumeId+"");
  }
});

module.exports = router;
