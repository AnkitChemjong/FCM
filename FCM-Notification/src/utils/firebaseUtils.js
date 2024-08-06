import { initializeApp } from "firebase/app";
import {getMessaging,onMessage} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCIcYCw1nBR9CLSFsssi7zil-Q3kEWlNyU",
  authDomain: "notification-cd1ac.firebaseapp.com",
  projectId: "notification-cd1ac",
  storageBucket: "notification-cd1ac.appspot.com",
  messagingSenderId: "217909737706",
  appId: "1:217909737706:web:c2c8d36a29ce189a097f93",
  measurementId: "G-2HD40PSVQQ"
};

  

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


export const onMessaging=()=>{
  return new Promise((resolve, reject)=>{
    onMessage(messaging,(payload)=>{
      resolve(payload);
    })
  })
}




