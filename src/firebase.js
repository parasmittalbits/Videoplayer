// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase }  from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUdwiQYIzDKUU44163OGlNOqVEHLhsYqg",
  authDomain: "video-player-7f64d.firebaseapp.com",
  databaseURL: "https://video-player-7f64d-default-rtdb.firebaseio.com",
  projectId: "video-player-7f64d",
  storageBucket: "video-player-7f64d.appspot.com",
  messagingSenderId: "490537202600",
  appId: "1:490537202600:web:97c2569b4112715231e39d",
  measurementId: "G-L9JWL23253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);