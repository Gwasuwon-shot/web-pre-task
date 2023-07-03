import React from "react";
import styled from "styled-components";
import {
  parse,
  format,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  addDays,
  isSameDay,
  isSunday,
} from "date-fns";

import { SCHEDULE_DATA, COLOR_DATA } from "../../mocks/data";

interface DaysProps {
  currentMonth: Date;
  selectedDate: Date;
  // onClickDate: (date: Date) => void;
}

export default function Days({ currentMonth, selectedDate }: DaysProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate: Date = endOfWeek(monthEnd);
  const scheduleData = SCHEDULE_DATA.map((item) => ({
    ...item,
    date: item.date.map((data) => parse(data, "yyyy.MM.dd", new Date())),
  }));

  const sortedScheduleData = scheduleData.sort((a, b) => a.time.localeCompare(b.time));

  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];
  let day: Date = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const sunDay = isSunday(day);
      const daySchedule = sortedScheduleData.filter((item) => item.date.some((date) => isSameDay(date, day)));

      days.push(
        <Day key={day.toString()} $issunday={sunDay}>
          <DayText
            $issameday={isSameDay(day, selectedDate)}
            $isnotvalid={format(currentMonth, "M") !== format(day, "M")}>
            {formattedDate}
          </DayText>
          {daySchedule.map((schedule) => (
            <ScheduleWrapper key={schedule.id} $student={schedule.student}>
              {schedule.student} {schedule.time.slice(0, 5)}
            </ScheduleWrapper>
          ))}
        </Day>,
      );
      day = addDays(day, 1);
    }
    rows.push(<DaysWrapper key={day.toString()}>{days}</DaysWrapper>);
    days = [];
  }

  return <Wrapper>{rows}</Wrapper>;
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 2rem;
  flex-direction: column;
`;

const DaysWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 48rem;
  cursor: pointer;
`;

interface DayProp {
  $issunday: boolean;
}

const Day = styled.article<DayProp>`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 5rem;
  width: 30rem;

  ${({ $issunday }) => `
    ${$issunday ? "color: #FCB3A6" : undefined}
  `};
`;

interface DayTextProps {
  $isnotvalid: boolean;
  $issameday: boolean;
}

const DayText = styled.p<DayTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;

  ${({ $isnotvalid, $issameday }) => `
    ${$isnotvalid ? "color: #CED4DA" : ""}
    ${$issameday ? "color: white; background-color: #0DA98E; border-radius: 50%; " : ""}    
  `};
`;

interface ScheduleWrapper {
  $student: string;
}

const ScheduleWrapper = styled.p<ScheduleWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.5rem;

  padding: 0.2rem 0;

  ${({ $student }) => {
    switch ($student) {
      case "지수":
        return `
          background-color: #FFD9F2
        `;
        break;

      case "희정":
        return `
          background-color:#E3D2FA`;
        break;

      case "혜인":
        return `
            background-color:#D3F1C1`;
        break;

      case "성경":
        return `
          background-color: #CCF5ED
        `;
        break;

      case "은빈":
        return `
          background-color:#EBDDD5 `;
        break;

      default:
        return undefined;
    }
  }}
`;
