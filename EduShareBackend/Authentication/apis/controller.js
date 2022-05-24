'use strict'

// import { firebase } from '../firebase.js'
// import { getAuth, signInWithCustomToken } from "firebase/auth";
// import initializeApp from "firebase/app";
import firebase from "firebase";
import bcrypt from "bcrypt";

import getAuth from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDMd-024ETAuXIWyQ2oZJ5L7tOhtTbAxQI",
    authDomain: "filesharingedi.firebaseapp.com",
    databaseURL: "https://filesharingedi.firebaseio.com",
    projectId: "filesharingedi",
    storageBucket: "filesharingedi.appspot.com",
    messagingSenderId: "478279119993",
    appId: "1:478279119993:web:81b3fb7564a364d697d0a8",
    measurementId: "G-17Z81NY340"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const db = firebase.firestore();

export const loginUser = function (req, res) {

    var emailid = req.query.username;
    var password = req.query.password;
    console.log(emailid);
    console.log(password);

    auth.signInWithEmailAndPassword(emailid, password).
        then(response => res.status(200).send(response.data)).
        catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            res.send(errorMessage);
        });
};

export const signUpUser = async function (req, res) {
    var userEmail = req.body.email;
    var userPass = req.body.password;
    var name = req.body.name;
    var college = req.body.collegeName;
    const salt = await bcrypt.genSalt(10);
    var password = await bcrypt.hash(userPass, salt);
    auth.createUserWithEmailAndPassword(userEmail, password).then(user => {
        return user;
    }).then(user => {
        console.log("Received user object is...");
        const obj = {
            userid: user.user.uid,
            name: name,
            institute: college,
            username: user.user.email,
            download_count: 0,
            upload_count: 0,
            points: 0
        };

        var userDataReference = db.collection("Users");
        userDataReference.doc().set(obj).then(function () {
            console.log("Details added to firestore");
            res.status(201).send(user);
        }).catch(function (error) {
            console.log(error);
            res.status(500).send(error.message);
        });
    })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.status(500).send(errorMessage);
        });
}
