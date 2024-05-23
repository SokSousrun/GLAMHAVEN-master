// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebase = {
  apiKey: "AIzaSyD4GhIxwm73rVpDxggOtQ_dqzjO-0mINAE",
  authDomain: "auth-singup-login.firebaseapp.com",
  projectId: "auth-singup-login",
  storageBucket: "auth-singup-login.appspot.com",
  messagingSenderId: "528446592717",
  appId: "1:528446592717:web:32f9663bc41ccf56367b84"
};

const app = initializeApp(firebase);
const auth = getAuth(app);

export { auth };
