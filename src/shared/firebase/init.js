import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDI1zunn1O5HQ6nnl59wu4NTT-3JAbocso",
  authDomain: "my-most-amazing-app.firebaseapp.com",
  databaseURL: "https://my-most-amazing-app.firebaseio.com",
  projectId: "my-most-amazing-app",
  storageBucket: "my-most-amazing-app.appspot.com",
  messagingSenderId: "1013700972251",
  appId: "1:1013700972251:web:84b00afc25b0fcb48386fe",
};

export const app = initializeApp(firebaseConfig);
