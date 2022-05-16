'use strict'

module.exports = function (app) {
    var authenticate = require('./controller');

    app.route('/login').get(authenticate.loginUser);
}
