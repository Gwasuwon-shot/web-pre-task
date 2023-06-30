import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function JisooCalendar() {
  const [value, setValue] = useState<Date>(new Date());

  return (
    <div>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}
