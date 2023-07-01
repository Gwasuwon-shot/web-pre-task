import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import { format, subMonths, addMonths } from "date-fns";
import Week from "./Week";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }
  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  return (
    <div>
      <CalendarHeader prevMonth={prevMonth} nextMonth={nextMonth} currentMonth={currentMonth} />
      <Week />
    </div>
  );
}
