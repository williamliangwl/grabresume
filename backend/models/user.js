
var User = function(id, username, password, isAdmin){
    this.id = id;
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
    this.resumeIds = [];
};

User.prototype.isMatch = function(username, password) {
    return this.username === username
        && this.password === password;
};

User.prototype.getId = function() {
    return this.id;
};

User.prototype.getUsername = function() {
    return this.username;  
};

User.prototype.getIsAdmin = function() {
    return this.isAdmin;
}

User.prototype.addResumeId = function(resumeId) {
    this.resumeIds.push(resumeId);
};

User.prototype.getAllResumeIds = function() {
    return this.resumeIds;
};

User.prototype.getData = function() {
    return {
        'id': this.getId(),
        'username': this.getUsername(),
        'isAdmin': this.getIsAdmin()
    }
}

module.exports = User;