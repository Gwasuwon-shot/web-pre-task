import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export default function JisooAlarm() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_APP_API_KEY}`,
    authDomain: `${import.meta.env.VITE_APP_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.VITE_APP_PROJECT_ID}`,
    storageBucket: `${import.meta.env.VITE_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${import.meta.env.VITE_APP_MESSAGING_SENDER_ID}`,
    appId: `${import.meta.env.VITE_APP_APP_ID}`,
    measurementId: `${import.meta.env.VITE_APP_MEASUREMENT_ID}`,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  function handleAllowAlarm() {
    console.log("권한 요청 중...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("알림 권한이 허용됨");

        // FCM 메세지 처리
      } else {
        console.log("알림 권한 허용 안됨");
      }
    });
  }

  function handleAttend() {
    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_VAPID_KEY,
    });

    if (token) console.log("token: ", token);
    else console.log("Can not get Token");

    onMessage(messaging, (payload) => {
      console.log("메시지가 도착했습니다.", payload);
      // ...
    });
  }

  return (
    <>
      <button type="button" onClick={handleAllowAlarm}>
        알림허용
      </button>
      <button type="button" onClick={handleAttend}>
        출석
      </button>
    </>
  );
}
