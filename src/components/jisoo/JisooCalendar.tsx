import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TimePicker } from "react-ios-time-picker";
import { styled } from "styled-components";
import { CAELENDAR_DATA } from "../../core/jisoo/calendarData";
import { calendarDatatTypes } from "../../type/jisoo/calendarDataTypes";

export default function JisooCalendar() {
  const [value, onChange] = useState(new Date());
  const [classData, setClassData] = useState<calendarDatatTypes[]>(CAELENDAR_DATA);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [startTimeValue, setStartTimeValue] = useState("10:00 AM");
  const [endTimeValue, setEndTimeValue] = useState("11:00 AM");
  const [studentName, setStudentName] = useState("");

  function handleChangeStartTimeValue(timeValue: string) {
    setStartTimeValue(timeValue);
  }

  function handleChangeEndTimeValue(timeValue: string) {
    setEndTimeValue(timeValue);

    console.log(typeof timeValue);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function checkTimeValue(time: string) {
    const hour = time.split(" ")[1];
    const realTime = time.split(" ")[0];

    return hour === "AM" ? "오전 " + realTime : "오후 " + realTime;
  }

  function handleInputStudentName(e: React.ChangeEvent<HTMLInputElement>) {
    setStudentName(e.target.value);
  }

  function handleSaveTimes() {
    handleCloseModal();
    const newTimeData = startTimeValue.split(" ")[0] + "~" + endTimeValue.split(" ")[0];
    const originTimeDatas = classData
      .map(({ student, times }) => student === studentName && times)
      .filter((time) => time !== false)[0];

    setClassData(
      classData.map((data) =>
        data.student === studentName
          ? {
              ...data,
              times: [...originTimeDatas, { dates: moment(value).format("YYYY-MM-DD"), time: newTimeData }],
            }
          : data,
      ),
    );
  }

  return (
    <JisooCalendarContainer>
      {openModal && (
        <Modal>
          <ModalTitleWrapper>
            <ModalTitle>{moment(value).format("YYYY-MM-DD")}</ModalTitle>
            <XButton onClick={handleCloseModal}>X</XButton>
          </ModalTitleWrapper>
          <TimePickerWrapper>
            <li>
              <p>시작</p>
              <TimePicker
                onChange={handleChangeStartTimeValue}
                value={startTimeValue}
                cancelButtonText="취소"
                saveButtonText="확인"
                use12Hours
              />
              <RealTimeBox>{checkTimeValue(startTimeValue)}</RealTimeBox>
            </li>
            <li>
              <p>종료</p>
              <TimePicker
                onChange={handleChangeEndTimeValue}
                value={endTimeValue}
                cancelButtonText="취소"
                saveButtonText="확인"
                use12Hours
              />
              <RealTimeBox>{checkTimeValue(endTimeValue)}</RealTimeBox>
            </li>
          </TimePickerWrapper>
          <StudentNameInput type="text" placeholder="학생이름" onChange={handleInputStudentName} />
          <TimeResultButtom type="button" onClick={handleSaveTimes}>
            저장
          </TimeResultButtom>
        </Modal>
      )}
      <JisooCalendarWrapper onClick={handleOpenModal}>
        <Calendar
          onChange={onChange}
          // useState로 포커스 변경 시 현재 날짜 받아오기
          formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
          value={value}
          minDetail="month"
          maxDetail="month"
          showNeighboringMonth={false}
          tileContent={({ date, view }) => {
            let html: Element[] = [];
            {
              classData.map(({ id, student, times, color }: calendarDatatTypes) => {
                times.map(
                  ({ dates, time }) =>
                    dates === moment(date).format("YYYY-MM-DD") &&
                    html.push(
                      <Box key={id} $color={color}>
                        <p>{student}</p>
                        <p>{time}</p>
                      </Box>,
                    ),
                );
              });
            }

            return <>{html}</>;
          }}
        />
      </JisooCalendarWrapper>
    </JisooCalendarContainer>
  );
}

const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.caption_large};
`;

const XButton = styled.p`
  ${({ theme }) => theme.fonts.caption_large};

  cursor: pointer;
`;

const JisooCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  /* justify-content: space-between; */

  position: absolute;

  width: 50rem;
  height: 50rem;
  padding: 3rem;

  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray1};
`;

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
    border: 0.5px solid black;
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
  /* 1년 앞뒤 버튼 */
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
`;

const TimePickerWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30rem;
  margin-top: 3rem;
`;

const ModalTitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const RealTimeBox = styled.div`
  position: absolute;

  ${({ theme }) => theme.fonts.body1};

  z-index: 0;
`;

const TimeResultButtom = styled.button`
  padding: 1rem;
  margin-top: 35rem;

  border: 1px solid black;

  cursor: pointer;
`;

const StudentNameInput = styled.input`
  margin-top: -4.5rem;

  border: 1px solid black;
`;
