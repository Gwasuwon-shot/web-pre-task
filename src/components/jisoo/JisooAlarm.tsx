import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { postToken } from "../../api/postToken";

interface DeviceTokenType {
  deviceToken: string;
}

export default function JisooAlarm() {
  const [deviceToken, setDeviceToken] = useState("");

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  // const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_APP_API_KEY,
  //   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_APP_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_APP_APP_ID,
  //   measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const messaging = getMessaging(app);

  function handleAllowAlarm() {
    // console.log("권한 요청 중...");
    // Notification.requestPermission().then((permission) => {
    //   if (permission === "granted") {
    //     console.log("알림 권한이 허용됨");
    //     // FCM 메세지 처리
    //   } else {
    //     console.log("알림 권한 허용 안됨");
    //   }
    // });
  }

  // const { mutate: throwToken } = useMutation(postToken, {
  //   onSuccess: (res) => {
  //     console.log(res);
  //   },
  // });

  async function handleAttend() {
    // console.log("들어옴");
    // const token = await getToken(messaging, {
    //   vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
    // });
    // console.log(token);
    // if (token) {
    //   throwToken(token);
    //   console.log("token: ", token);
    // } else console.log("Can not get Token");
    // onMessage(messaging, (payload) => {
    //   console.log("메시지가 도착했습니다.", payload);
    //   // ...
    // });
  }

  const { mutate } = useMutation(postToken, {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  async function getDeviceToken() {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
    });
    setDeviceToken(token);
  }

  useEffect(() => {
    getDeviceToken();
  }, []);

  useEffect(() => {
    mutate(deviceToken);
  }, [deviceToken]);

  return (
    <>
      <Button type="button" onClick={handleAllowAlarm}>
        알림허용
      </Button>
      <Button type="button" onClick={handleAttend}>
        출석
      </Button>
      {deviceToken}
    </>
  );
}

const Button = styled.button`
  border: 1px solid black;

  padding: 2rem;
`;
