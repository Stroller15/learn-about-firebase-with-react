// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpsxqKctC1ts3doWTb99jb8uVpaWruljM",
  authDomain: "learning-60aa8.firebaseapp.com",
  projectId: "learning-60aa8",
  storageBucket: "learning-60aa8.appspot.com",
  messagingSenderId: "398800518276",
  appId: "1:398800518276:web:54818bfbf3d005f89c16d1",
  databaseURL: "https://learning-60aa8-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


