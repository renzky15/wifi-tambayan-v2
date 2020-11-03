import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAjc77WOSJon1VpueebFjRUlvWJhZhOHls",
    authDomain: "wifi-tambayan-v2.firebaseapp.com",
    databaseURL: "https://wifi-tambayan-v2.firebaseio.com",
    projectId: "wifi-tambayan-v2",
    storageBucket: "wifi-tambayan-v2.appspot.com",
    messagingSenderId: "607023369213",
    appId: "1:607023369213:web:336f87a8970836a3032794",
})

export default app
