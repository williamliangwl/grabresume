var User = require('../models/user');
var Resume = require('../models/resume');

var resumes = [];

var ResumeRepository = {};

ResumeRepository.addResume = function(jobTitle, jobDesc, company) {
    var id = resumes.length;
    var resume = new Resume(id, jobTitle, jobDesc, company);
    resumes.push(resume);
    return resume.getId();
};

ResumeRepository.getResume = function(id) {
    console.log(id);
    console.log(resumes.length);
    for (var i = 0; i < resumes.length; i++) {
        var resume = resumes[i];
        if (resume.getId() == id) return resume;
    }

    return null;
}

module.exports = ResumeRepository;