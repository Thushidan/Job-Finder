// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFBNRu4ChX3Y3N5Ymzk-Uh3bNuoweHHAk",
  authDomain: "jobfinder-c8367.firebaseapp.com",
  projectId: "jobfinder-c8367",
  storageBucket: "jobfinder-c8367.firebasestorage.app",
  messagingSenderId: "436154099651",
  appId: "1:436154099651:web:423722f9c301c587c77f76"
};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);