import styled from 'styled-components';

export default function Day() {
    
    // 요일 생성
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

    font-size: 1.5rem;

    border: 0.5rem;
`