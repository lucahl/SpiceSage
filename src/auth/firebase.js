
// Import the functions you might need for the SDKs from Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    /*
    Env variables are currently not working. Figure out how to not hard code them!!!!!

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    */

    apiKey: "AIzaSyCzIgR6h999jZQpT0WhylxkJuc7ij1n114",
    authDomain: "spicesage-80bb2.firebaseapp.com",
    projectId: "spicesage-80bb2",
    storageBucket: "spicesage-80bb2.firebasestorage.app",
    messagingSenderId: "463259297485",
    appId: "1:463259297485:web:ad298d4cc7f29d5dd46b84",
    measurementId: "G-XVRY0H735H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase auth instance

export { auth };
