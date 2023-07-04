import { styled } from "styled-components";

export default function Toolbar(props) {
  const { date } = props;

  const navigate = (action) => {
    props.onNavigate(action);
  };

  return (
    <div className="rbc-toolbar">
      <div> 이미지 </div>
      <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
    </div>
  );
}
