import { styled } from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./customCalendar/calendarStyles.css";
import Toolbar from "./customCalendar/Toolbar";
import { useState } from "react";
import { EVENT_LIST } from "./customCalendar/CalendarConstnat";

export default function BeanCalendar() {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);
  const [selectedDate, setSelectedDate] = useState(new Date());

  //  일정 등록 => 카테고리 마다 색 구분
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

  // 날짜 한글로
  const formats = {
    weekdayFormat: (date, culture, localizer) => localizer.format(date, "dddd", culture),
  };

  //  날짜 이동
  const handleNavigate = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Header> 비니 캘린더 </Header>
      <CalendarWrapper>
        <Calendar
          localizer={localizer}
          style={{ height: 500, width: 500 }}
          events={EVENT_LIST}
          startAccessor="start"
          endAccessor="end"
          culture={"ko-KR"}
          onNavigate={handleNavigate}
          date={selectedDate}
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
