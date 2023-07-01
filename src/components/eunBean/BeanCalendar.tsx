import { styled } from "styled-components";
import "react-calendar/dist/Calendar.css";

export default function BeanCalendar() {
  return (
    <>
      <Header> 비니 캘린더 </Header>
      <CalendarWrapper></CalendarWrapper>
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
