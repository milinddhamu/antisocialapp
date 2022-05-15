// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq-UTVZaVjSKM0tkoycGUlip8QB9jnbco",
  authDomain: "anti-socialapp.firebaseapp.com",
  projectId: "anti-socialapp",
  storageBucket: "anti-socialapp.appspot.com",
  messagingSenderId: "107755314405",
  appId: "1:107755314405:web:bc2edc4de40d6e4926480c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export  {app, db, storage};