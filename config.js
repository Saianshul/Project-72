import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCjpCp2HJnqcqZa_wSxCtccC_wTjl7csr4",
  authDomain: "story-hub-29d4d.firebaseapp.com",
  projectId: "story-hub-29d4d",
  storageBucket: "story-hub-29d4d.appspot.com",
  messagingSenderId: "65715130063",
  appId: "1:65715130063:web:1f285efc8c0bde35f7b1ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   