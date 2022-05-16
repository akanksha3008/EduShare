'use strict'

import axios from 'axios';
import firebase from '../firebase';

exports.loginUser = function (req, res) {

    var emailid = req.query.username;
    var password = req.query.password;
    console.log(emailid);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(emailid, password).
        then(response => res.status(200).send(response.data)).
        catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);

        });
    // console.log(req);
    // console.log("Hello World");
    // return res.status(200).send(res.data);

};
