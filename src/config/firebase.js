// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
//import { productos } from "../data/bdPrue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ4t0X0KBYrbuQDvVxfGwiiIK4R6DUjDs",
  authDomain: "appportfolio-cf257.firebaseapp.com",
  projectId: "appportfolio-cf257",
  storageBucket: "appportfolio-cf257.appspot.com",
  messagingSenderId: "126366705164",
  appId: "1:126366705164:web:68210437f1762e612b7029"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// console.log(db)
/* 
productos.forEach((p) => {
    addDoc(collection(db, 'productos'), p)
        .then((data) => { console.log(`El producto ${data.id} fue enviado a firestore`)})
        .catch((error) => { console.log(error) })
})
*/


