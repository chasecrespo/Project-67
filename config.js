import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDmG2p2II9_oBGVsbh_YrD7SKDqrQLcgrg",
    authDomain: "project-67-e84a0.firebaseapp.com",
    projectId: "project-67-e84a0",
    storageBucket: "project-67-e84a0.appspot.com",
    messagingSenderId: "752060238705",
    appId: "1:752060238705:web:39d9b22eacf22a3adcc4d0" 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();



