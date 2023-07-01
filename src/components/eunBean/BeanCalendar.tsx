import { styled } from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "./customCalendar/Toolbar";

export default function BeanCalendar() {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);
  const myEventsList = [{ start: new Date(), end: new Date(), title: "special event", tooltip: "isitThere?" }];

  return (
    <>
      <Header> 비니 캘린더 </Header>
      <CalendarWrapper>
        <Calendar
          localizer={localizer}
          style={{ height: 500, width: 500 }}
          events={myEventsList}
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
