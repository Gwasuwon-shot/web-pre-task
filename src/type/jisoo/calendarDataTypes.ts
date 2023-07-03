export interface calendarDatatTypes {
  id: number;
  student: string;
  times: timeDataTypes[];
  color: string;
}

export interface timeDataTypes {
  dateId: number;
  dates: string;
  time: string;
}
