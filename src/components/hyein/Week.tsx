import React from "react";
import styled from "styled-components";

export default function Week() {
  const DATE: string[] = ["일", "월", "화", "수", "목", "금", "토", "일"];

  const dateList: JSX.Element[] = DATE.map((day, index) => <DayWrapper key={index}>{day}</DayWrapper>);
  return <WeekWrapper>{dateList}</WeekWrapper>;
}

const WeekWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1.8rem;
`;

const DayWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 6rem;
`;
