// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // phần link qua env bị lỗi api key, lạy cụ con mệt
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyArmpbZDN1VM43WsFBj_GrQPUPHClE55tI",
  authDomain: "netflix-clone-reactjs-13.firebaseapp.com",
  projectId: "netflix-clone-reactjs-13",
  storageBucket: "netflix-clone-reactjs-13.appspot.com",
  messagingSenderId: "1056671341691",
  appId: "1:1056671341691:web:839d821239d1e55bf596de",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
