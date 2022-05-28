// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGCkZTYb7xSEUOcIo1taCYaifdZg98c4",

  authDomain: "assingtment-12.firebaseapp.com",

  projectId: "assingtment-12",

  storageBucket: "assingtment-12.appspot.com",

  messagingSenderId: "296373104003",

  appId: "1:296373104003:web:398f52e347afe65aac1ab6",

  measurementId: "G-B7MBJS41XN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
