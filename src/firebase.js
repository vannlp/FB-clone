import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRKJpTRfgvHW_88OR95U0amJmBkSMz-gs",
    authDomain: "facebook-clone-b0363.firebaseapp.com",
    projectId: "facebook-clone-b0363",
    storageBucket: "facebook-clone-b0363.appspot.com",
    messagingSenderId: "251969838831",
    appId: "1:251969838831:web:9b3f42f978bc28af2c051a",
    measurementId: "G-2VJVCRZ782"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export { provider, auth };
export default db;