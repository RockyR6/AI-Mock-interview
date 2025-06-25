import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBzaEuQw1FFeKmeP6TnDX5KJwrG1x9WyBs",
  authDomain: "ai-mock-77779.firebaseapp.com",
  projectId: "ai-mock-77779",
  storageBucket: "ai-mock-77779.firebasestorage.app",
  messagingSenderId: "343980519039",
  appId: "1:343980519039:web:cd58e627ad5193f7b3194a",
  measurementId: "G-R7ELE420KJ"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp()


export const auth = getAuth(app)
export const db = getFirestore(app)