import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button class="button-64">
      <div>
        <span class="text" onClick={props.onClick}>
          {props.title}
        </span>
      </div>
    </button>
  );
};

export default Button;
