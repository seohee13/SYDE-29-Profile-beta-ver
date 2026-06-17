import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8lgHzOJsehekK2R5Y0HdMIT4MDNTLE9s",
  authDomain: "syde29-profile.firebaseapp.com",
  projectId: "syde29-profile",
  storageBucket: "syde29-profile.firebasestorage.app",
  messagingSenderId: "626208928096",
  appId: "1:626208928096:web:98bcbb934fd354a2096e05",
  measurementId: "G-FWNBEYGVR0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
