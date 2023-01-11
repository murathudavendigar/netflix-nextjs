// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAU8PcS2njp_vD7eMO5lcw3O_gaI1Tul0",
  authDomain: "nextjs-netflix-ef4f3.firebaseapp.com",
  projectId: "nextjs-netflix-ef4f3",
  storageBucket: "nextjs-netflix-ef4f3.appspot.com",
  messagingSenderId: "853221793568",
  appId: "1:853221793568:web:9d79a3064d3fe6ae344145",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
