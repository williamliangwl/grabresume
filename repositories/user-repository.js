var User = require('../models/user'); 

var users = [
    new User(1, 'admin', 'admin')
];

var UserRepository = {};

UserRepository.authenticate = function(username, password) {
    var userData = {};

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.isMatch(username, password)) {
            userData = {
                'id': user.getId(),
                'username': user.getUsername()
            };
            break;
        }
    }

    return userData;
};

UserRepository.register = function(username, password) {
    var registered = false;

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.isMatch(username, password)) {
            registered = true;
            break;
        }
    }

    if (!registered) {
        users.push(new User(users.length + 1, username, password));
    }

    return !registered;
}

UserRepository.getUser = function(userId) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.getId() === userId) return user;
    }

    return null;
};

module.exports = UserRepository;