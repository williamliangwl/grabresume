
var Resume = function(id, jobTitle, jobDesc, company) {
    this.id = id;
    this.jobTitle = jobTitle;
    this.jobDesc = jobDesc;
    this.company = company;
}

Resume.prototype.isAnyMatch = function(id, jobTitle, jobDesc, company) {
    return this.id === id
        || this.jobTitle === jobTitle
        || this.jobDesc === jobDesc
        || this.company === company;
};

Resume.prototype.getId = function() {
    return this.id;
}

module.exports = Resume;