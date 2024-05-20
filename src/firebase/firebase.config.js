// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
//   apiKey: "AIzaSyBV8ZwniQUW9pFHdPOq1LPihOPP9D5uRFM",
//   authDomain: "bistro-boss-20c67.firebaseapp.com",
//   projectId: "bistro-boss-20c67",
//   storageBucket: "bistro-boss-20c67.appspot.com",
//   messagingSenderId: "931325416932",
//   appId: "1:931325416932:web:6a60071ead477dfa8363f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;