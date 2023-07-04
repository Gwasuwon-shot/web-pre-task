import styled from 'styled-components';

export default function Day() {
    
    const days = [];
    const date = ['일', '월', '화', '수', '목', '금',' 토'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <Week key = {i}>
                {date[i]}
            </Week>
        )
    }

    return (
        <DayWrapper>
            {days}
        </DayWrapper>
    )
}

const DayWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    gap: 8rem;

    padding: 5rem;

`

const Week = styled.div`
    display: flex;
    justify-content: center;

    width: 10rem;
    
    font-size: 2rem;
    font-weight: bold;
    
    border: 0.5rem;
`