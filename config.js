 import firebase from "firebase";

//initialize your database
 const firebaseConfig = {
    apiKey: "AIzaSyBtG8_2sy_9j7rF4aaA78e5FvBAi5jq_LA",
    authDomain: "school-attendence-60a57.firebaseapp.com",
    databaseURL: "https://school-attendence-60a57-default-rtdb.firebaseio.com",
    projectId: "school-attendence-60a57",
    storageBucket: "school-attendence-60a57.appspot.com",
    messagingSenderId: "656526091407",
    appId: "1:656526091407:web:7908f0cbe7412d99ff7cfa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  