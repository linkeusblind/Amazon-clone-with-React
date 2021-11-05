import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxdve-8R2JewfnsG0EpSnLS9rmWloaP3M",
  authDomain: "amazing-react-app.firebaseapp.com",
  databaseURL: "https://amazing-react-app.firebaseio.com",
  projectId: "amazing-react-app",
  storageBucket: "amazing-react-app.appspot.com",
  messagingSenderId: "926138698087",
  appId: "1:926138698087:web:5433298168fe53c45387c2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }