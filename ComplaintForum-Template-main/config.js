import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAFBJSLaC8jFTvPVyXqRYlbOEcTAeyQTN4",
  authDomain: "complaint-forum-16ca7.firebaseapp.com",
  projectId: "complaint-forum-16ca7",
  storageBucket: "complaint-forum-16ca7.appspot.com",
  messagingSenderId: "372200939309",
  appId: "1:372200939309:web:7a70ee5bcf9e2159937da4"
 
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

