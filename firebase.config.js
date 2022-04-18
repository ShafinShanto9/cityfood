import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDopwqK26Ci-iY5Glj2wo-1R2tj5TCCyTQ",
  authDomain: "cityfood-b8e13.firebaseapp.com",
  databaseURL: "https://cityfood-b8e13-default-rtdb.firebaseio.com",
  projectId: "cityfood-b8e13",
  storageBucket: "cityfood-b8e13.appspot.com",
  messagingSenderId: "941557794696",
  appId: "1:941557794696:web:7731f80293c091258f1c3d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const fireStore = getFirestore(app)
const storage = getStorage(app)

export {app , fireStore, storage}