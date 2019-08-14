import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAGiSXkKJv2VsflZpmVmORyjHmwt4vxOgk",
  authDomain: "tangential-span-161713.firebaseapp.com",
  databaseURL: "https://tangential-span-161713.firebaseio.com",
  projectId: "tangential-span-161713",
  storageBucket: "",
  messagingSenderId: "263017423444",
  appId: "1:263017423444:web:8199a0c18a875f13"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase