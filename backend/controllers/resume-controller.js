var ResumeRepository = require('../repositories/resume-repository');

var ResumeController = {};

ResumeController.addResume = function(user, jobTitle, jobDesc, company) {
    var resumeId = ResumeRepository.addResume(jobTitle, jobDesc, company);
    user.addResumeId(resumeId);
    return resumeId;
};

ResumeController.getAllUserResumes = function(user) {
    var resumes = [];
    var resumeIds = user.getAllResumeIds();
    
    for (var i = 0; i < resumeIds.length; i++) {
        var resumeId = resumeIds[i];
        var resume = ResumeRepository.getResume(resumeId);
        resumes.push(resume);
    }
    return resumes;
};

ResumeController.getResume = function(id) {
    return ResumeRepository.getResume(id);
}

module.exports = ResumeController;