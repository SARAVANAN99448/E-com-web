// firebase for authentication
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB3K9bF7_3AeVVNSLAghVMqhN8puofOcrI",
  authDomain: "one-piece-ea45f.firebaseapp.com",
  projectId: "one-piece-ea45f",
  storageBucket: "one-piece-ea45f.appspot.com",
  messagingSenderId: "583214502505",
  appId: "1:583214502505:web:ff0e403c3ce2d61c4cc8f8",
  measurementId: "G-06ELYJBQ4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth