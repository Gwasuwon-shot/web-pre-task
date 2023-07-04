import {format} from 'date-fns';

import { Icon } from '@iconify/react';
import styled from 'styled-components';

interface HeaderProps {
    currentMonth: Date;
    prevMonth:  () => void;
    nextMonth:  () => void;
}

export default function Header({currentMonth, prevMonth, nextMonth}: HeaderProps) {
    
    return (
        <HeaderWrapper>
            <Icon icon = "bi:arrow-left-circle-fill" onClick = {prevMonth} />
            <TimeWrapper>
                <Year> {format(currentMonth, 'yyyy')}년 </Year>
                <Month> {format(currentMonth, 'M')}월 </Month>
            </TimeWrapper>
            <Icon icon = "bi:arrow-right-circle-fill" onClick = {nextMonth} />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 8rem;

    padding: 5rem;
`

const TimeWrapper = styled.header`
    display: flex;
    justify-content: center;   
    align-items: center;

    gap: 1rem;

    font-size: 2rem;

`

const Year = styled.span`
    display: flex;
`

const Month = styled.span`
    display: flex;
    margin-right: 3rem;
`