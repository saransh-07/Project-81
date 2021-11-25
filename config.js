import firebase from 'firebase';
require('@firebase/firestore')
import "firebase/auth";



var firebaseConfig = {
  apiKey: "AIzaSyDnLtzBkTa3dVd4UPObAxaPzC2rlqgeYLw",
  authDomain: "barter-6b58b.firebaseapp.com",
  databaseURL: "https://barter-6b58b.firebaseio.com",
  projectId: "barter-6b58b",
  storageBucket: "barter-6b58b.appspot.com",
  messagingSenderId: "338534169859",
  appId: "1:338534169859:web:a6b929fc09e4efe5e87d36"
};

 
   if(!firebase.apps.length) { 
     firebase.initializeApp(firebaseConfig) 
     } 
     
  export default firebase.firestore()
