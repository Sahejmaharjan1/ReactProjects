import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBotXJVTAuvWAIRzN-WmBHIhsjM6ZK6YV0",
    authDomain: "chat-app-miniproject.firebaseapp.com",
    databaseURL: "https://chat-app-miniproject.firebaseio.com",
    projectId: "chat-app-miniproject",
    storageBucket: "chat-app-miniproject.appspot.com",
    messagingSenderId: "124146169554",
    appId: "1:124146169554:web:fb9471a79af67dabf41f0b",
    measurementId: "G-R2B7HVHVVC"
});

const db = firebaseApp.firestore()

export default db;