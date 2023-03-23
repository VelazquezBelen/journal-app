// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyC-ToNW8vqllAMCVzmLt1fOSWqKEIDPY8c",
//   authDomain: "react-course-fba76.firebaseapp.com",
//   projectId: "react-course-fba76",
//   storageBucket: "react-course-fba76.appspot.com",
//   messagingSenderId: "20450293332",
//   appId: "1:20450293332:web:f5c1f5a1b162c462715fc1"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyALWRXlUBnYzH80YLY_PdUYfHPl3ZsrHD8",
//   authDomain: "react-course-test-1d5be.firebaseapp.com",
//   projectId: "react-course-test-1d5be",
//   storageBucket: "react-course-test-1d5be.appspot.com",
//   messagingSenderId: "356035680908",
//   appId: "1:356035680908:web:ee7ffb73f821f7a34939a9"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY, 
  authDomain: VITE_AUTHDOMAIN, 
  projectId: VITE_PROJECTID, 
  storageBucket: VITE_STORAGEBUCKET, 
  messagingSenderId: VITE_MESSAGINGSENDERID, 
  appId: VITE_APPID, 
};

 
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
