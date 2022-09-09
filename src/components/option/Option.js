import React, { useRef, useState } from "react";
import ToolTip from "../tootip/ToolTip";
import "./option.css";

export default function Option() {
  const [position, setPosition] = useState("top");

  const handleChange = (e) => {
    e.preventDefault();
    setPosition(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} id="form">
        <option value="top">Top</option>
        <option value="right">Right</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
      </select>
      <ToolTip position={position} />
    </div>
  );
}
