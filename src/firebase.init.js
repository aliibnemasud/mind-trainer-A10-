// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFGlBXhKUXu1zTaKiQblp7kq5C1wxRi_4",
  authDomain: "independent-service-prov-2bff1.firebaseapp.com",
  projectId: "independent-service-prov-2bff1",
  storageBucket: "independent-service-prov-2bff1.appspot.com",
  messagingSenderId: "559588315786",
  appId: "1:559588315786:web:6e73d0b3757eb1f0055373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;