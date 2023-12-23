import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCGRgBaI8Rk1UQU_a04o3I3UUuSH753bZw",
  authDomain: "morrisseybr20xx.firebaseapp.com",
  projectId: "morrisseybr20xx",
  storageBucket: "morrisseybr20xx.appspot.com",
  messagingSenderId: "966797335231",
  appId: "1:966797335231:web:aa5b66846d0c26473e440a",
  measurementId: "G-4M73PRR3KE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
isSupported().then((isSupported) => {
  if (isSupported) getAnalytics(app);
});
