import React from "react";
import styled from "styled-components";
import { format, endOfMonth, endOfWeek, startOfMonth, startOfWeek, addDays, isSameDay, isSunday } from "date-fns";

export default function Days({ currentMonth, selectedDate, onClickDate }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      const sunDay = isSunday(day);
      days.push(
        <Day
          key={day}
          onClick={() => onClickDate(parse(cloneDay))}
          issameday={isSameDay(day, selectedDate)}
          issunday={sunDay}>
          <DayText isnotvalid={format(currentMonth, "M") !== format(day, "M")}>{formattedDate}</DayText>
        </Day>,
      );
      day = addDays(day, 1);
    }
    rows.push(<DaysWrapper key={day}>{days}</DaysWrapper>);
    days = [];
  }

  return <Wrapper>{rows}</Wrapper>;
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.2rem;
  gap: 30px;
  flex-direction: column;
`;

const DaysWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  width: 30.5rem;
  cursor: pointer;
`;

const Day = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.6rem;
  height: 1.6rem;

  ${({ issameday, issunday }) => `
    ${issameday ? "color: white; background-color: #0DA98E;  border-radius: 50% " : ""}    
    ${issunday ? "color: #FCB3A6" : ""}
  `}
`;

const DayText = styled.p`
  ${({ isnotvalid }) => `
    ${isnotvalid ? "color: #CED4DA" : ""}
  `}
`;
