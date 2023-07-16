import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCW18EbSkQqtgFvrKLL3-ikalxdG4W0Mmg",
  authDomain: "whatsapp-clone-86842.firebaseapp.com",
  projectId: "whatsapp-clone-86842",
  storageBucket: "whatsapp-clone-86842.appspot.com",
  messagingSenderId: "722778416037",
  appId: "1:722778416037:web:408247594039042e1b7e4c",
  measurementId: "G-S4MM6FVXJ2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
