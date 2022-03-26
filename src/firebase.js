import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQuMhmHL6Lk8djpMeLaN9O8B2pj80oV2c",
  authDomain: "connect-2-9d584.firebaseapp.com",
  projectId: "connect-2-9d584",
  storageBucket: "connect-2-9d584.appspot.com",
  messagingSenderId: "807634171105",
  appId: "1:807634171105:web:a3eee5c4b24ba97d6f73a0",
};
initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const db = getFirestore();
