import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwdX63YtpfaoROz08Vk7pIwRE1NmWGKFI",
  authDomain: "to-do-list-app-38998.firebaseapp.com",
  projectId: "to-do-list-app-38998",
  storageBucket: "to-do-list-app-38998.appspot.com",
  messagingSenderId: "148864499975",
  appId: "1:148864499975:web:a887529b770f73073f05a2",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
