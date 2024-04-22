import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cteasy-8d916.firebaseapp.com",
  projectId: "cteasy-8d916",
  storageBucket: "cteasy-8d916.appspot.com",
  messagingSenderId: "534523468155",
  appId: "1:534523468155:web:58e7828c91e0778ce985de"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);