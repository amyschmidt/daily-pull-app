import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBA05iO4WWB6-A7MjgGJCQoGsyJLlWR4X8",
  authDomain: "tarot-tracker-e52ed.firebaseapp.com",
  databaseURL: "https://tarot-tracker-e52ed.firebaseio.com",
  projectId: "tarot-tracker-e52ed",
  storageBucket: "tarot-tracker-e52ed.appspot.com",
  messagingSenderId: "467968689808"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase
