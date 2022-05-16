// const firebase = require('firebase')

import firebase from "firebase";
// import * as firebase from './firebase';
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
exports.firebase = this.firebase;