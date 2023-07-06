import styled from "styled-components";

export default function JisooAlarm() {
  function handleAttend() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("알림 권한이 허용됨");

        // FCM 메세지 처리
      } else {
        console.log("알림 권한 허용 안됨");
      }
    });
  }

  return <AlarmButton onClick={handleAttend}>출석</AlarmButton>;
}

const AlarmButton = styled.button`
  width: 30rem;
  height: 20rem;

  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.sub2};
`;
