import Body from './Body';
import Day from './Day';
import Header from './Header';
import styled from 'styled-components';
import {useState} from 'react';

export default function Calender() {

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());


    return (
    <CalenderWrapper>
        <Header />
        <Body />
        <Day />
    </CalenderWrapper>
    );
}



const CalenderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`