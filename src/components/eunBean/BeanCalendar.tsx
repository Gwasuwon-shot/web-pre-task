import { styled } from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// 한글 넣기
import "moment/dist/locale/ko";

import "./calendar-style/calendarStyles.css";
import Toolbar from "./calendar-component/Toolbar";
import DateHeader from "./calendar-component/DateHeader";
import { EVENT_LIST } from "./calendar-data/CalendarConstnat";

export default function BeanCalendar() {
  // locale 한글로 설정
  moment.locale("ko-KR");
  // localizer 인스턴스 생성
  const localizer = momentLocalizer(moment);

  //  일정 등록 => 카테고리 마다 색 구분
  const components = {
    event: (props: any) => {
      // 시간 만들기
      const dateString = props.event.start;
      const dateObject = new Date(dateString);
      const timeString = dateObject.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
      const eventType = props?.event?.type;

      // 이벤트 색 주기
      switch (eventType) {
        case "토마토":
          return (
            <Event style={{ background: "yellow" }}>
              {props.title} {timeString}
            </Event>
          );
        case "키위":
          return (
            <Event style={{ background: "beige" }}>
              {props.title} {timeString}
            </Event>
          );
        case "바나나":
          return (
            <Event style={{ background: "lightgrey" }}>
              {props.title} {timeString}
            </Event>
          );
        case "체리":
          return (
            <Event style={{ background: "lightblue" }}>
              {props.title} {timeString}
            </Event>
          );
        case "복숭아":
          return (
            <Event style={{ background: "lightpink" }}>
              {props.title} {timeString}
            </Event>
          );
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
          events={EVENT_LIST}
          startAccessor="start"
          endAccessor="end"
          components={{
            ...components,
            toolbar: Toolbar,
            dateHeader: DateHeader,
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

const Event = styled.div`
  color: black;
  border-radius: 3px;
  height: 100%;
  padding: 0.2rem;
`;
