
var Resume = function(id, jobTitle, jobDesc, company) {
    this._id = id;
    this._jobTitle = jobTitle;
    this._jobDesc = jobDesc;
    this._company = company;
}

Resume.prototype.isAnyMatch = function(id, jobTitle, jobDesc, company) {
    return this._id === id
        || this._jobTitle === jobTitle
        || this._jobDesc === jobDesc
        || this._company === company;
};

Resume.prototype.getId = function() {
    return this._id;
}

module.exports = Resume;