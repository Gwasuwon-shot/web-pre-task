import {startOfMonth, endOfMonth, startOfWeek, endOfWeek} from 'date-fns';
import {addDays, format} from 'date-fns';
import styled from 'styled-components';
import {ScheduleType} from '../../type/ScheduleType';

interface HeaderProps {
    currentMonth: Date;
    schedule: ScheduleType[];
}

interface DayProps {
    isThisMonth: boolean;
}


export default function Body({currentMonth, schedule} :HeaderProps) {

    const rows = [];
    let daySchedule: ScheduleType[] = [];
    let days = [];
    let calenderDate = '';
    let isThisMonth = false; // 이번 달 날짜인지 확인하는 값


    const monthStart = startOfMonth(currentMonth);  // 이번 달의 시작일
    const monthEnd = endOfMonth(monthStart);        // 이번 달의 마지막 일
    const startDate = startOfWeek(monthStart);      // monthStart가 속한 주의 시작 일
    const endDate = endOfWeek(monthEnd);            // monthEnd가 속한 주의 마지막 일
    let day = startDate;

    while (day <= endDate) {

        for (let i = 0; i < 7; i++) {

            // 이번달 날짜인지 검사 후, 이번달 날짜일 경우 스케줄 체크
            if (isThisMonth === false && format(day, 'dd') === '01') { 
                isThisMonth = true; // 지난달이었는데, 1일로 넘어오면 true 
            } else if (isThisMonth === true && format(day, 'dd') === '01') {
                isThisMonth = false; // 이번달이었는데, 다음달로 넘어가면 false
            }

            if (isThisMonth === true) {
                let compareDate = format(monthStart, 'yyyy.MM') + "." + format(day, 'dd');
                daySchedule = schedule.filter((items) => items.date.includes(compareDate));
                daySchedule = daySchedule.sort((a, b)=> a.time.localeCompare(b.time));
            }


            // calender 날짜 표기
            calenderDate = format(day, 'dd');
            days.push(
                <Day isThisMonth = {isThisMonth}>
                    {calenderDate}
                    {isThisMonth === true ? 
                        daySchedule.map((item)=> (
                            <ScheduleText key = {item.id} color = {item.color}>
                                {item.student} {item.time}
                            </ScheduleText>
                        )) 
                        : null
                    }
                </Day>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <Row>
                {days}
            </Row>
        );
        days = [];
    }
    return <BodyWrapper>{rows} </BodyWrapper>;
};


const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 3rem;
`

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;

    gap: 8rem;
`

const Day = styled.div<DayProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 10rem;
    height: 13rem;

    
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => (props.isThisMonth ? 'black' : 'lightgray')}; 
`

const ScheduleText = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    width: 10rem;
    margin-top: 1rem;

    text-align: center;
    border-radius: 50px;
    font-size: 1.3rem;
    background-color: ${(props)=>props.color};
`