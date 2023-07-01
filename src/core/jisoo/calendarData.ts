interface CalendarDatatTypes {
  id: number;
  student: string;
  time: string;
  date: string[];
}

export const CAELENDAR_DATA: CalendarDatatTypes[] = [
  { id: 1, student: "지수", time: "13:00~14:00", date: ["2023.11.06", "2023.11.13", "2023.11.20", "2023.11.27"] },
  { id: 2, student: "희정", time: "19:00~20:00", date: ["2023.11.06", "2023.11.16"] },
];
