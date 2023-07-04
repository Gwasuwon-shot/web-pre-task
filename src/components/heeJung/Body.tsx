import {startOfMonth, endOfMonth, startOfWeek, endOfWeek} from 'date-fns';
import {isSameMonth, isSameDay, addDays, parse, format} from 'date-fns';
import styled from 'styled-components';

interface HeaderProps {
    currentMonth: Date;
}

export default function Body({currentMonth} :HeaderProps) {
    
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {

        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            days.push(
                <Day>
                    {formattedDate}
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
    return <BodyWrapper>{rows}</BodyWrapper>;
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
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;

    width: 3rem;
    height: 7rem;

`
