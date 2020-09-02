import Firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa2WBINnlixLjiD_53QQmerj_TV3DS_F0",
  authDomain: "club-gamma.firebaseapp.com",
  databaseURL: "https://club-gamma.firebaseio.com",
  projectId: "club-gamma",
  storageBucket: "club-gamma.appspot.com",
  messagingSenderId: "707662210040",
  appId: "1:707662210040:web:d6ff1c0a805b75aa40ac0d",
  measurementId: "G-22NV2DWVYG"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
