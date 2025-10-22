// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYzyanwR8CyG3G7Q0dy4Kqvo3KvXmOkPc",
    authDomain: "nazmul-b30b0.firebaseapp.com",
    projectId: "nazmul-b30b0",
    storageBucket: "nazmul-b30b0.firebasestorage.app",
    messagingSenderId: "42950217407",
    appId: "1:42950217407:web:2176302a9457cd1386400a",
    measurementId: "G-HHEYYN4SYW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export default analytics;