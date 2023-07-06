import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { getToken } from "../../api/getAlarmToken";
import { pushAlarm } from "../../api/pushAlarm";

export default function JisooAlarm() {
  // 알림 허용하는 버튼
  function handleAllowAlarm() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("알림 권한이 허용됨");

        // FCM 메세지 처리
      } else {
        console.log("알림 권한 허용 안됨");
      }
    });
  }

  // async 를 사용학 위해 메서드로 따로 분리함
  //   async function handleAttend() {
  //     let token = await getToken().
  //     // console.log("token === ", token);

  //     //서버에 토큰 보내기
  //     let data = await pushAlarm(token);
  //     console.log(data);
  //   }

  const queryClient = useQueryClient();

  function handleAttend() {
    queryClient.invalidateQueries("getDeviceToken");
  }

  const { data: getDeviceToken } = useQuery("getDeviceToken", getToken(), {
    onSuccess: (res) => {
      console.log(res);
      //   pushAlarmStart(token);
    },
  });

  const { mutate: pushAlarmStart } = useMutation(pushAlarm);

  return (
    <>
      <button onClick={handleAllowAlarm}>알림 허용</button>
      <AlarmButton onClick={handleAttend}>출석</AlarmButton>
    </>
  );
}

const AlarmButton = styled.button`
  width: 30rem;
  height: 20rem;

  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.sub2};
`;
