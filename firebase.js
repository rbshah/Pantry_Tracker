// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-s-j_-b2wETdcgeVp9yaECjyZ1wVldQI",
  authDomain: "pantry-tracker-a38de.firebaseapp.com",
  projectId: "pantry-tracker-a38de",
  storageBucket: "pantry-tracker-a38de.appspot.com",
  messagingSenderId: "167186149786",
  appId: "1:167186149786:web:ac25d0f7b9892eba420a23",
  measurementId: "G-V0VHR2RDXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
