import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDCU2QHCCmeZ1UUW_2if_UpkA5-LgErBlU",
  authDomain: "react-test-vod.firebaseapp.com",
  databaseURL: "https://react-test-vod-default-rtdb.firebaseio.com",
  projectId: "react-test-vod",
  storageBucket: "react-test-vod.appspot.com",
  messagingSenderId: "751205737181",
  appId: "1:751205737181:web:877eae2ba90b7397887134"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}