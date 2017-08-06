
var Resume = function(id, jobTitle, jobDesc, company, username) {
    this.id = id;
    this.jobTitle = jobTitle;
    this.jobDesc = jobDesc;
    this.company = company;
    this.username = username;
}

Resume.prototype.isAnyMatch = function(id, jobTitle, jobDesc, company) {
    return this.id === id
        || this.jobTitle === jobTitle
        || this.jobDesc === jobDesc
        || this.company === company
        || this.username === username;
};

Resume.prototype.getId = function() {
    return this.id;
}

module.exports = Resume;