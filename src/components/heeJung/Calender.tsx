import Header from './Header';
import { scheduleState } from '../../atom/store';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

export default function Calender() {
    const schedules = useRecoilValue(scheduleState);
    
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    
    return (
    <CalenderWrapper>
        <Header />
    </CalenderWrapper>
    );
}



const CalenderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`