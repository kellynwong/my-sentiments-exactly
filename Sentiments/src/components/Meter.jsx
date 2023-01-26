import React from "react";

const Meter = (props) => {
  return (
    <meter
      className={props.score >= 0 ? "greenMeter" : "redMeter"}
      value={props.score.toFixed(3)}
      min="-1"
      max="1"
      optimum="0"
    >
      {props.score.toFixed(3)}
    </meter>
  );
};

export default Meter;
