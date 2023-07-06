// import { getToken } from "firebase/messaging";

// const token = await getToken(messaging, {
//   vapidKey: `${import.meta.env.VITE_APP_VAPID_KEY}`,
// });

import firebase from "firebase";

export async function getToken() {
  if (firebase.messaging.isSupported() === false) {
    console.log("isSupported: ", firebase.messaging.isSupported());
    return null;
  }

  const messaging = firebase.messaging();
  const token = await messaging
    .requestPermission()
    .then(function () {
      return messaging.getToken();
    })
    .then(function (token: string) {
      return token;
    })
    .catch(function (err: any) {
      console.debug("에러 : ", err);
      return null;
    });

  console.log("token: ", token);
  return token;
}
