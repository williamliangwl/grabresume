var User = require('../models/user');
var Resume = require('../models/resume');

var resumes = [];

var ResumeRepository = {};

ResumeRepository.addResume = function(jobTitle, jobDesc, company, username) {
    var id = resumes.length + 1;
    var resume = new Resume(id, jobTitle, jobDesc, company, username);
    resumes.push(resume);
    return resume.getId();
};

ResumeRepository.getResume = function(id) {
    for (var i = 0; i < resumes.length; i++) {
        var resume = resumes[i];
        if (resume.getId() == id) return resume;
    }

    return null;
}

ResumeRepository.getAllResumes = function() {
    return resumes;
}

module.exports = ResumeRepository;