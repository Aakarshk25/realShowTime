import React from "react";

function Heading() {
  const customStyle = {
    color: "red"
  };

  const liveTime = new Date().getHours();

  let greeting;
  if (liveTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (liveTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}
export default Heading;
