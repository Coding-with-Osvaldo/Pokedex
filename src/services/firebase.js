import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD8aHezdq5ibz6vaFIwzSBOWjHqayFhEUQ",
  authDomain: "pokedex-492a2.firebaseapp.com",
  projectId: "pokedex-492a2",
  storageBucket: "pokedex-492a2.appspot.com",
  messagingSenderId: "395775537686",
  appId: "1:395775537686:web:2636a270245b43db98bb37",
  measurementId: "G-YNTJ4E5DZX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
