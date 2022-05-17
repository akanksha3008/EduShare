'use strict'
import { loginUser, signUpUser } from './controller.js';
function routes(app) {

    app.route('/login').get(loginUser);
    app.route('/register').post(signUpUser);
}

export { routes }
