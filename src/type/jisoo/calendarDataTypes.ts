export interface calendarDatatTypes {
  id: number;
  student: string;
  times: timeDataTypes[];
  color: string;
}

export interface timeDataTypes {
  dates: string;
  time: string;
}
