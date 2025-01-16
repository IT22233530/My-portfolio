// firebase/config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyATRgICD0-dfC05KL39xvjcObyqOQ1FFn8",
    authDomain: "portfolio-9ffe1.firebaseapp.com",
    projectId: "portfolio-9ffe1",
    storageBucket: "portfolio-9ffe1.firebasestorage.app",
    messagingSenderId: "647341606628",
    appId: "1:647341606628:web:37625c6578d41c91ddcef1",
    measurementId: "G-Y0SNPY7PC6"
   // Include this if using Realtime Database
};

const app = initializeApp(firebaseConfig);

export default app;
