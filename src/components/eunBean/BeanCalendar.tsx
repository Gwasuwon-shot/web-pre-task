import { styled } from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// 한글 넣기
import "moment/dist/locale/ko";

import "./customCalendar/calendarStyles.css";
import Toolbar from "./customCalendar/Toolbar";
import { EVENT_LIST } from "./customCalendar/CalendarConstnat";

export default function BeanCalendar() {
  // locale 한글로 설정
  moment.locale("ko-KR");
  // localizer 인스턴스 생성
  const localizer = momentLocalizer(moment);

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

  // 날짜 풀네임
  const formats = {
    weekdayFormat: (date, culture, localizer) => localizer.format(date, "dddd", culture),
  };

  return (
    <>
      <Header> 비니 캘린더 </Header>
      <CalendarWrapper>
        <Calendar
          localizer={localizer}
          formats={formats}
          style={{ height: 500, width: 500 }}
          events={EVENT_LIST}
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
