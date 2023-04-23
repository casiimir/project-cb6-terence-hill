import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX943fLje8t3PS-wPKzPLD6eA6b5qvZuI",
  authDomain: "nextjs-firebase-auth-2fdbd.firebaseapp.com",
  projectId: "nextjs-firebase-auth-2fdbd",
  storageBucket: "nextjs-firebase-auth-2fdbd.appspot.com",
  messagingSenderId: "812180893939",
  appId: "1:812180893939:web:a182806ca742eac0ff4786",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
