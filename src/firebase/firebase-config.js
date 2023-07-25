import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJnCnRGwt7xgi2R2O96c8vAIcWMLo4dt4",
  authDomain: "metrosantiago-404cd.firebaseapp.com",
  projectId: "metrosantiago-404cd",
  storageBucket: "metrosantiago-404cd.appspot.com",
  messagingSenderId: "227464143794",
  appId: "1:227464143794:web:b51cbb2b221a70e8f7faab",
  measurementId: "G-NEDXCDQ2FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
