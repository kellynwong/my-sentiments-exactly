import React from "react";

const MiniMeter = (props) => {
  return (
    (props.score || props.sentiment) && (
      <meter
        id="miniMeter"
        className={props.score >= 0 ? "greenMeter" : "redMeter"}
        value={props.score.toFixed(2)}
        min="-1"
        max="1"
        optimum="0"
      >
        {props.score.toFixed(2)}
      </meter>
    )
  );
};

export default MiniMeter;
