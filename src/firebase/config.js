import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf29IszxVBujBmx6hUuBEtMEtzK-3xk_8",
  authDomain: "fir-ae9ff.firebaseapp.com",
  projectId: "fir-ae9ff",
  storageBucket: "fir-ae9ff.appspot.com",
  messagingSenderId: "416856137262",
  appId: "1:416856137262:web:3381d5f3b90e3673c7c9bf",
  measurementId: "G-RF0KZQJEDL"
};
export default  firebase.initializeApp(firebaseConfig)