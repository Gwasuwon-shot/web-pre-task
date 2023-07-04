import styled from 'styled-components';

export default function Header() {

    // 요일 생성
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const DayHeader = () => {
        return days.map((day, index) => (
            <div key = {index}> {day} </div>
        ));
    };

    return (
        <HeaderWrapper>
            {DayHeader()}
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