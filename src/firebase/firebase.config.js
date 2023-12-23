// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEJylgekrbbd9bz0VUqELoDG525LuNYh4",
  authDomain: "zen-task-78aa0.firebaseapp.com",
  projectId: "zen-task-78aa0",
  storageBucket: "zen-task-78aa0.appspot.com",
  messagingSenderId: "521850745981",
  appId: "1:521850745981:web:698b9d7feda72ef6b72d14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
