var User = require('../models/user'); 

var users = [
    new User(1, 'admin', 'admin', true)
];

var UserRepository = {};

UserRepository.getUserByUsernamePassword = function(username, password) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.isMatch(username, password)) {
            return user;
        }
    }
};

UserRepository.register = function(username, password) {
    var registered = false;
    var newUser = null;

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.isMatch(username, password)) {
            registered = true;
            break;
        }
    }

    if (!registered) {
        newUser = new User(users.length + 1, username, password, false)
        users.push(newUser);
    }

    return newUser;
}

UserRepository.getUser = function(userId) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.getId() === userId) {
            return user;
        };
    }
};

module.exports = UserRepository;