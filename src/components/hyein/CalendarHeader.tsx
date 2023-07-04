import React from "react";
import styled from "styled-components";
import { format, add, subMonths } from "date-fns";

interface CalendarHeaderProps {
  currentMonth: Date;
  prevMonth: Date;
  nextMonth: Date;
}

export default function CalendarHeader({ currentMonth, prevMonth, nextMonth }: CalendarHeaderProps) {
  return (
    <HeaderWrapper>
      <PrevMonthButton onClick={prevMonth}>{"<"}</PrevMonthButton>
      <YearMonthWrapper>
        {format(currentMonth, "yyyy")}년 {format(currentMonth, "MM")}월
      </YearMonthWrapper>
      <NextMonthButton onClick={nextMonth}> {">"}</NextMonthButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  gap: 1.6rem;
`;

const YearMonthWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;

const PrevMonthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextMonthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
