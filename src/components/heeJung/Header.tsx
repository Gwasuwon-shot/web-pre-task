import {addMonths, format, subMonths} from 'date-fns';

import {Icon} from '%iconify/react';
import styled from 'styled-components';

export default function Header({currentMonth, prevMonth, nextMonth}) {
    
    return (
        <HeaderWrapper>
            <div>
                <span>
                    <span>
                        {format(currentMonth, 'M')} 월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            <div>
                <Icon icon = "bi:arrow-left-circle-fill" onClick = {prevMonth} />
                <Icon icon = "bi:arrow-right-circle-fill" onClick = {nextMonth} />
            </div>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 8rem;

    padding: 5rem;
`
