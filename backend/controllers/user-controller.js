var UserRepository = require('../repositories/user-repository');

var UserController = {};

UserController.login = function(username, password) {
    return UserRepository.getUserByUsernamePassword(username, password);
}

UserController.register = function(username, password) {
    return UserRepository.register(username, password);
}

UserController.getUser = function(userId) {
    return UserRepository.getUser(userId);
}

module.exports = UserController;