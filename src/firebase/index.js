import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjkgA3xH9MgHU0qUuBKcdPEytSAq0eLH4",
    authDomain: "react-redux-crud-app-b891c.firebaseapp.com",
    projectId: "react-redux-crud-app-b891c",
    storageBucket: "react-redux-crud-app-b891c.appspot.com",
    messagingSenderId: "476956237088",
    appId: "1:476956237088:web:651e2e3991fa9e8eedcb45",
    measurementId: "G-G17H9X82NP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
