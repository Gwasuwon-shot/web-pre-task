import { styled } from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./customCalendar/calendarStyles.css";
import Toolbar from "./customCalendar/Toolbar";

export default function BeanCalendar() {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      id: 0,
      title: "은빈",
      start: new Date(2023, 6, 1, 10, 0), // 시작 시간 (년, 월(0부터 시작), 일, 시간, 분)
      end: new Date(2023, 6, 1, 12, 0), // 종료 시간 (년, 월(0부터 시작), 일, 시간, 분)
      color: "#ff0000",
    },
    {
      id: 1,
      title: "늦은 은빈",
      start: new Date(2023, 6, 1, 8, 0), // 시작 시간 (년, 월(0부터 시작), 일, 시간, 분)
      end: new Date(2023, 6, 1, 9, 0), // 종료 시간 (년, 월(0부터 시작), 일, 시간, 분)
      color: "#ff0000",
    },
    {
      id: 2,
      title: "3 은빈",
      start: new Date(2023, 6, 1, 8, 0), // 시작 시간 (년, 월(0부터 시작), 일, 시간, 분)
      end: new Date(2023, 6, 1, 9, 0), // 종료 시간 (년, 월(0부터 시작), 일, 시간, 분)
      color: "#ff0000",
    },
    {
      id: 3,
      title: "4 은빈",
      start: new Date(2023, 6, 1, 8, 0), // 시작 시간 (년, 월(0부터 시작), 일, 시간, 분)
      end: new Date(2023, 6, 1, 9, 0), // 종료 시간 (년, 월(0부터 시작), 일, 시간, 분)
      color: "#ff0000",
    },
    {
      id: 4,
      title: "이벤트 2",
      start: new Date(2023, 6, 2, 14, 0),
      end: new Date(2023, 6, 2, 16, 0),
    },
  ];

  return (
    <>
      <Header> 비니 캘린더 </Header>
      <CalendarWrapper>
        <Calendar
          localizer={localizer}
          style={{ height: 500, width: 500 }}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          components={{
            toolbar: Toolbar,
          }}
        />
      </CalendarWrapper>
    </>
  );
}

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  font-size: 3rem;
  text-align: center;
  margin: 3rem;
`;
