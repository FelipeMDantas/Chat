import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfLmWOY0e_Zv2qHe8N7MDXAIveOnqnyiE",
  authDomain: "react-chat-6a410.firebaseapp.com",
  projectId: "react-chat-6a410",
  storageBucket: "react-chat-6a410.appspot.com",
  messagingSenderId: "593775672832",
  appId: "1:593775672832:web:030ff80046375be65c62e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
