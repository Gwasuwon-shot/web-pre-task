import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";
import { CAELENDAR_DATA } from "../../core/jisoo/calendarData";
import { calendarDatatTypes } from "../../type/jisoo/calendarDataTypes";

export default function JisooCalendar() {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState<calendarDatatTypes[]>(CAELENDAR_DATA);

  return (
    <Calendar
      onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
      formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
      value={value}
      minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      navigationLabel={null}
      showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
      className="mx-auto w-full text-sm border-b"
      tileContent={({ date, view }) => {
        // 날짜 타일에 컨텐츠 추가하기 (html 태그)
        // 추가할 html 태그를 변수 초기화
        let html: any[] = [];
        // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
        {
          mark.map(
            ({ id, student, time, dates }: calendarDatatTypes) =>
              dates.find((x) => x === moment(date).format("YYYY-MM-DD")) &&
              html.push(
                <Box key={id}>
                  {student}
                  {time}
                </Box>,
              ),
          );
        }
        // if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
        //   html.push(<Dot></Dot>);
        // }
        // // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
        return (
          <>
            <div className="flex justify-center items-center absoluteDiv">{html}</div>
          </>
        );
      }}
    />
  );
}

const Box = styled.button`
  display: flex;

  height: 2rem;
  padding: 1rem;
  margin: 1px;

  border-radius: 5px;

  background-color: #f87171;
`;
