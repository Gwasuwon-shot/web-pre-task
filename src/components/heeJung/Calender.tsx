import {addMonths, subMonths} from 'date-fns';

import Body from './Body';
import Day from './Day';
import Header from './Header';
import styled from 'styled-components';
import {useState} from 'react';

export default function Calender() {

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = setCurrentMonth(subMonths(currentMonth, 1));
    const nextMonth = setCurrentMonth(addMonths(currentMonth, 1));
    
    return (
        <CalenderWrapper>
            <Header 
                currentMonth = {currentMonth} 
                prevMonth = {prevMonth}
                nextMonth = {nextMonth}        
            />
            <Day />
            <Body />
        </CalenderWrapper>
    );
}



const CalenderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`