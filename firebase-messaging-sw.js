import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "@firebase/messaging";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDNyoLsnDzmay7XS2uB_CIIwuKGx26ZeRk",
  authDomain: "pre-gwasuoneshot.firebaseapp.com",
  projectId: "pre-gwasuoneshot",
  storageBucket: "pre-gwasuoneshot.appspot.com",
  messagingSenderId: "137792399262",
  appId: "1:137792399262:web:9674770e2ca7cb6212988f",
  measurementId: "G-T2QDBQ3LHT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const messaging = getMessaging();

async function requestPermission() {
  console.log("권한 요청 즁");

  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    console.log("알림 허용 안됨");
    return;
  }

  console.log("알림 권한이 허용됨");

  const token = await getToken(messaging, {
    vapidKey: import.meta.env.REACT_APP_VAPID_KEY,
  });

  if (token) console.log("token:", token);
  else console.log("Can not get Token");

  onMessage(messaging, (payload) => {
    console.log("메세지가 도착했습니다.", payload);
  });
}

requestPermission();
