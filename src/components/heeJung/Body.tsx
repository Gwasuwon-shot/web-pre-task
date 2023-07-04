import styled from 'styled-components';

export default function Body() {
    
    // 요일 생성
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const BodyHeader = () => {
        return days.map((day, index) => (
            <div key = {index}> {day} </div>
        ));
    };

    return (
        <BodyWrapper>
            {BodyHeader()}
        </BodyWrapper>
    )
}

const BodyWrapper = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 8rem;

    padding: 5rem;
`
