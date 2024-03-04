// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-2992b.firebaseapp.com",
    projectId: "real-estate-2992b",
    storageBucket: "real-estate-2992b.appspot.com",
    messagingSenderId: "399076282148",
    appId: "1:399076282148:web:ae005bd9806ba889cdadb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);