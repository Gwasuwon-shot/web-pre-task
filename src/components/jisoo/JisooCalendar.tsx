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
    <JisooCalendarWrapper>
      <Calendar
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          {
            mark.map(
              ({ id, student, time, dates, color }: calendarDatatTypes) =>
                dates.find((x) => x === moment(date).format("YYYY-MM-DD")) &&
                html.push(
                  <Box key={id} $color={color}>
                    <p>{student}</p>
                    <p>{time}</p>
                  </Box>,
                ),
            );
          }
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">{html}</div>
            </>
          );
        }}
      />
    </JisooCalendarWrapper>
  );
}

const Box = styled.button<{ $color: string }>`
  display: flex;

  padding: 1rem;
  margin: 1rem !important;

  border-radius: 5px;

  background-color: ${({ $color }) => $color};
`;

const JisooCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  .react-calendar__navigation button:disabled {
    //제목
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body1};
  }

  .react-calendar {
    border: none;
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.fonts.body1};
  }
  .react-calendar__month-view {
    // 날짜
    abbr {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .react-calendar__month-view__weekdays {
    // 요일
    abbr {
      ${({ theme }) => theme.fonts.body1};
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    //타일 한 칸
    text-align: center;
    min-height: 10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  /*hover, focus, 선택됐을 시 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${({ theme }) => theme.colors.gray1};
    outline: none;
    cursor: pointer;
  }
  /* 오늘 날짜 */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus,
  .react-calendar__tile--now {
    background: ${({ theme }) => theme.colors.sub1};
    border-radius: 10px;
  }
`;
