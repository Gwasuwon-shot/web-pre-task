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

  async function handleAllowAlarm() {
    const permission = await Notification.requestPermission();
    if (permission === "denied") {
      console.log("알림 권한 허용 안됨");
    }
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

  function handleAttend() {
    getDeviceToken();
  }

  useEffect(() => {
    mutate(deviceToken);
  }, [deviceToken]);

  function handleCopyClipBoard(token: string) {
    console.log(token);
    try {
      navigator.clipboard.writeText(token).then(() => {
        alert("클립보드에 토큰이 복사되었어요.");
      });
    } catch (err) {
      alert("링크 복사에 실패했습니다");
    }
  }

  return (
    <>
      <Button type="button" onClick={handleAllowAlarm}>
        알림허용
      </Button>
      <Button type="button" onClick={handleAttend}>
        출석
      </Button>
      <Button onClick={() => handleCopyClipBoard(deviceToken)}>토큰 복사하기</Button>
    </>
  );
}

const Button = styled.button`
  border: 1px solid black;

  padding: 2rem;
`;
