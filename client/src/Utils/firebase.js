// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
// 2. Import the specific Firebase services you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYb-HfTCw_WO2EQS-peNyCYVylP_VKXRM",
  authDomain: "clone-7a34b.firebaseapp.com",
  projectId: "clone-7a34b",
  storageBucket: "clone-7a34b.firebasestorage.app",
  messagingSenderId: "852199443311",
  appId: "1:852199443311:web:15d7ed433bec3a57b4769a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 5. Initialize and export the services
export const auth = getAuth(app);
export const db = getFirestore(app);