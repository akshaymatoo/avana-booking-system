import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPeKUcaU_bu3YQLR8tZ6wsdQj36w5-9qM",
  authDomain: "avana-ed68d.firebaseapp.com",
  projectId: "avana-ed68d",
  storageBucket: "avana-ed68d.appspot.com",
  messagingSenderId: "159729076346",
  appId: "1:159729076346:web:06f7194f803069835293c3"
};

const app = !firebase.apps.length
		? firebase.initializeApp(firebaseConfig)
		: firebase.app()

const db = app.firestore();

export { db }; 