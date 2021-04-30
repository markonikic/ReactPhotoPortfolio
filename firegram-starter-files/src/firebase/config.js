import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaQdRiPs5OwaMcOWUTunBJ71oXdxdJpX4",
    authDomain: "antonioportfolio-42c9f.firebaseapp.com",
    projectId: "antonioportfolio-42c9f",
    storageBucket: "antonioportfolio-42c9f.appspot.com",
    messagingSenderId: "880439516880",
    appId: "1:880439516880:web:269c71cf40adfdfa6c88d5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
