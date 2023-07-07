import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import "@firebase/messaging";
// import firebase from "firebase";
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: "pre-gwasuoneshot.firebaseapp.com",
  projectId: "pre-gwasuoneshot",
  storageBucket: "pre-gwasuoneshot.appspot.com",
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_ID,
  appId: import.meta.env.REACT_APP_APP_ID,
  measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging();

getToken(messaging, {
  vapidKey: import.meta.env.REACT_APP_VAPID_KEY,
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("currentToken", currentToken);
    } else {
      console.log("No registration");
    }
  })
  .catch((e) => console.log("err:", e));

onMessage(messaging, (payload) => {
  console.log("Message received", payload);
});
