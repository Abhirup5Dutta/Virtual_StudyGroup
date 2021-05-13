import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyArPcy53WDKMvNTj9zoMao4mqupKYazfC4",
    authDomain: "discord-clone-3a76a.firebaseapp.com",
    projectId: "discord-clone-3a76a",
    storageBucket: "discord-clone-3a76a.appspot.com",
    messagingSenderId: "545054040685",
    appId: "1:545054040685:web:61676c8f28bf3b2f959564",
    measurementId: "G-WTQC72C7WH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;