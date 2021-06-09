import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyjPKOJDng6ltgYFSIY-Y8rNrvzz-yEGg",
    authDomain: "project-testing-1d695.firebaseapp.com",
    databaseURL: "https://project-testing-1d695-default-rtdb.firebaseio.com",
    projectId: "project-testing-1d695",
    storageBucket: "project-testing-1d695.appspot.com",
    messagingSenderId: "1035087313887",
    appId: "1:1035087313887:web:7e0f547c08c3fb7966626a"
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();

//export for using later
export { projectFirestore };