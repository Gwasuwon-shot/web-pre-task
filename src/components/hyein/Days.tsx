import React from "react";
import styled from "styled-components";
import { format, endOfMonth, endOfWeek, startOfMonth, startOfWeek, addDays, isSameDay, isSameMonth } from "date-fns";

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
      days.push(
        <div
          className={`${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
          onClick={() => onClickDate(parse(cloneDay))}>
          <span className={format(currentMonth, "M") !== format(day, "M") ? "text not-valid" : ""}>
            {formattedDate}
          </span>
        </div>,
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

const DaysWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  width: 30.5rem;

  cursor: pointer;
`;
