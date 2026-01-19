// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz-OnIIVvxO8AQVu7KOzM8Rjoh9TayQgM",
  authDomain: "eco-self-10c9f.firebaseapp.com",
  projectId: "eco-self-10c9f",
  storageBucket: "eco-self-10c9f.firebasestorage.app",
  messagingSenderId: "997750472388",
  appId: "1:997750472388:web:71d1f8a16411ee8ff51391",
  measurementId: "G-6KRMR3QE4E",
  databaseURL:'https://eco-self-10c9f-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
