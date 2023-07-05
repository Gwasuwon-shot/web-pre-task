import React from "react";

export default function DateHeader(props) {
  const { date, label } = props;
  const isSunday = new Date(date).getDay() === 0;

  function headerStyle() {
    return {
      color: isSunday ? "red" : "inherit",
    };
  }

  return (
    <div className="rbc-date-header" style={headerStyle()}>
      {label}
    </div>
  );
}
