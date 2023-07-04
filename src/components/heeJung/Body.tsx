import {startOfMonth, endOfMonth, startOfWeek, endOfWeek} from 'date-fns';
import {addDays, format} from 'date-fns';
import styled from 'styled-components';
import {ScheduleType} from '../../type/ScheduleType';

interface HeaderProps {
    currentMonth: Date;
    schedule: ScheduleType[];
}

export default function Body({currentMonth, schedule} :HeaderProps) {
    
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let calenderDate = '';
    let isThisMonth = false; // 이번 달 날짜인지 확인하는 값
    let daySchedule = [];

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
                console.log(compareDate);
                daySchedule = schedule.filter((items) => items.date.includes(compareDate));
                daySchedule = daySchedule.sort((a, b)=> a.time.localeCompare(b.time));
            }


            // calender 날짜 표기하는 부분
            calenderDate = format(day, 'dd');
            days.push(
                <Day>
                    {calenderDate}
                    {isThisMonth === true ? 
                        daySchedule.map((item)=> (
                            <ScheduleText>
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

const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;

    width: 10rem;
    height: 10rem;
`

const ScheduleText = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
`