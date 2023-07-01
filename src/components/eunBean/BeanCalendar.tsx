import { styled } from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./customCalendar/calendarStyles.css";
import Toolbar from "./customCalendar/Toolbar";

export default function BeanCalendar() {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);

  const eventList = [
    {
      id: 0,
      title: "은빈",
      start: new Date(2023, 6, 1, 7, 0), // 시작 시간 (년, 월(0부터 시작), 일, 시간, 분)
      end: new Date(2023, 6, 1, 8, 0), // 종료 시간 (년, 월(0부터 시작), 일, 시간, 분
      // 각 컬러 지정을 위한 type 지정
      data: {
        type: "비니",
      },
    },
    {
      id: 1,
      title: "2 은빈",
      start: new Date(2023, 6, 3, 8, 0),
      end: new Date(2023, 6, 3, 9, 0),
      data: {
        type: "비니",
      },
    },
    {
      id: 2,
      title: "3 은빈",
      start: new Date(2023, 6, 9, 9, 0),
      end: new Date(2023, 6, 9, 10, 0),
      data: {
        type: "비니",
      },
    },
    {
      id: 3,
      title: "",
      start: new Date(2023, 6, 1, 12, 0),
      end: new Date(2023, 6, 1, 14, 0),
      data: {
        type: "비니",
      },
    },
    {
      id: 4,
      title: "희정",
      start: new Date(2023, 6, 16, 16, 0),
      end: new Date(2023, 6, 16, 24, 0),
      data: {
        type: "히정",
      },
    },
  ];

  const components = {
    event: (props: any) => {
      const eventType = props?.event?.data?.type;
      switch (eventType) {
        case "비니":
          return <div style={{ background: "yellow", color: "black", height: "100%" }}>{props.title}</div>;
        case "히정":
          return <div style={{ background: "lightgreen", color: "black", height: "100%" }}>{props.title}</div>;
        default:
          return null;
      }
    },
  };

  return (
    <>
      <Header> 비니 캘린더 </Header>
      <CalendarWrapper>
        <Calendar
          localizer={localizer}
          style={{ height: 500, width: 500 }}
          events={eventList}
          startAccessor="start"
          endAccessor="end"
          components={{
            ...components,
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
