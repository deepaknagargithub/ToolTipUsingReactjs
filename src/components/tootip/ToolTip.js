import React, { useState } from "react";
import "./tooltip.css";

export default function ToolTip(props) {
  const position = props.position;
  console.log(position);

  const [msg, setMsg] = useState("");
  const handleEnter = () => {
    setMsg("TOOLTIP");
  };
  const handleLeave = () => {
    setMsg("");
  };
  return (
    <div className="tooltip">
      <div className="btn">
        <button
          id="press"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          press
        </button>
        <div className={`msg-${position}`}>{msg}</div>
      </div>
    </div>
  );
}
