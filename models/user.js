
var User = function(id, username, password){
    this._id = id;
    this._username = username;
    this._password = password;
};

User.prototype._resumeIds = [];

User.prototype.isMatch = function(username, password) {
    return this._username === username
        && this._password === password;
};

User.prototype.getId = function() {
    return this._id;
};

User.prototype.getUsername = function() {
    return this._username;  
};

User.prototype.addResumeId = function(resumeId) {
    this._resumeIds.push(resumeId);
};

User.prototype.getAllResumeIds = function() {
    return this._resumeIds;
};

module.exports = User;