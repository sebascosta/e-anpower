import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_v4t5TWCRTpVVOilLXmrrh6EACALzChc",
  authDomain: "anpower-96049.firebaseapp.com",
  projectId: "anpower-96049",
  storageBucket: "anpower-96049.appspot.com",
  messagingSenderId: "878837104071",
  appId: "1:878837104071:web:2b34f53e090c311d15ede2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)