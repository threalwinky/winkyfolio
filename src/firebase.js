// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7h2zezBfZOqtQ2DTjSkn78gkkQcBBzbM",
  authDomain: "winkyfolio.firebaseapp.com",
  projectId: "winkyfolio",
  storageBucket: "winkyfolio.appspot.com",
  messagingSenderId: "475791250277",
  appId: "1:475791250277:web:7e39c21097da585249078c",
  measurementId: "G-YBWR4NS90J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()