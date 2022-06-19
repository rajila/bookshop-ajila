// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

import FirebaseConfiguration from "./FirebaseConfiguration";

// Initialize Firebase
const app = initializeApp(FirebaseConfiguration);

const FirebaseDB = getFirestore(app);

export default FirebaseDB;