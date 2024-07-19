import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEXjRUODXxmwTMRnVIbPhkcMiz5roLoa4",
  authDomain: "loginpage-5514c.firebaseapp.com",
  projectId: "loginpage-5514c",
  storageBucket: "loginpage-5514c.appspot.com",
  messagingSenderId: "355511532264",
  appId: "1:355511532264:web:753b1e58ee73a688eea75d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}