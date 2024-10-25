import {initializeApp} from "firebase/app";
import {getDatabase} from "@firebase/database";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBqBFr8ERjPI49h8iNhx0IE8EwjH0pNYTI",
  authDomain: "know-your-tennant.firebaseapp.com",
  databaseURL: "https://know-your-tennant-default-rtdb.firebaseio.com",
  projectId: "know-your-tennant",
  storageBucket: "know-your-tennant.appspot.com",
  messagingSenderId: "714860798375",
  appId: "1:714860798375:web:d5ca1b5b29682d5940d682",
  measurementId: "G-L251D3CZR6"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db=getDatabase(app);

export {db,storage}
