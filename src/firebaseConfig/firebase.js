
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAa6bEcCrm4hWEtjvHDMxyht6_QKxHqG80",
  authDomain: "chain-firebase2.firebaseapp.com",
  projectId: "chain-firebase2",
  storageBucket: "chain-firebase2.appspot.com",
  messagingSenderId: "960055750240",
  appId: "1:960055750240:web:7cb7b549512eea0500dd05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
