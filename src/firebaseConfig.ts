// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDtYPm0_rPlPMh9yrzVVgN6SST5AymgX4M",
  authDomain: "saude-facil-d6840.firebaseapp.com",
  projectId: "saude-facil-d6840",
  storageBucket: "saude-facil-d6840.appspot.com",
  messagingSenderId: "868034135564",
  appId: "1:868034135564:web:cca7e3e440ef4110091029",
  measurementId: "G-YCDWBH6Y74",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


//const analytics = getAnalytics(app);
