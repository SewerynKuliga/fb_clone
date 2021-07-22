import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyApzLEsJd4anEakaYusEFmZ805e_ApkhhE",
  authDomain: "facebook-clone-f8174.firebaseapp.com",
  projectId: "facebook-clone-f8174",
  storageBucket: "facebook-clone-f8174.appspot.com",
  messagingSenderId: "578753954460",
  appId: "1:578753954460:web:218cb8dc51a071a058e359",
  measurementId: "G-PB2E7ZFL7G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;