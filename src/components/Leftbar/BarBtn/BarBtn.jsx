import React from "react";
import "./BarBtn.css";

function BarBtn({ text, Icon }) {
  return (
    <div className="barBtn">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default BarBtn;
