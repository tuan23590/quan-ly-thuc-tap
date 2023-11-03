// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmBtdEjn4iukF3P3ol70B4fOieBNOCaO0",
  authDomain: "quan-ly-thuc-tap-34502.firebaseapp.com",
  projectId: "quan-ly-thuc-tap-34502",
  storageBucket: "quan-ly-thuc-tap-34502.appspot.com",
  messagingSenderId: "950233656720",
  appId: "1:950233656720:web:e8401b109b279d55875715",
  measurementId: "G-0RTVD703KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);