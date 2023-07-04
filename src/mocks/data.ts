interface ScheduleData {
  id: number;
  student: string;
  time: string;
  date: string[];
}
[];

export const SCHEDULE_DATA: ScheduleData[] = [
  { id: 1, student: "지수", time: "13:00~14:00", date: ["2023.07.06", "2023.07.13", "2023.07.20", "2023.07.27"] },
  { id: 2, student: "희정", time: "19:00~20:00", date: ["2023.07.06", "2023.07.16"] },
  { id: 3, student: "혜인", time: "10:00~12:00", date: ["2023.07.06", "2023.07.16"] },
  { id: 4, student: "은빈", time: "22:00~23:00", date: ["2023.07.03", "2023.07.27"] },
  { id: 5, student: "성경", time: "21:00~22:30", date: ["2023.07.15"] },
];
