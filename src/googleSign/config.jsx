import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAl1ixwRPqgVGpkDEd_OTYZ-TqPRPPqsJY",
  authDomain: "clone-15a50.firebaseapp.com",
  projectId: "clone-15a50",
  storageBucket: "clone-15a50.appspot.com",
  messagingSenderId: "931925062620",
  appId: "1:931925062620:web:653bdaf2b210daea769519",
  measurementId: "G-6Q4CTQMMLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}