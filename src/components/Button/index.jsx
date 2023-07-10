import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        onClick={props.clickHandler}
        disabled={props.isDisabled}
      >
        <p className="button-text">{props.title}</p>
      </button>
    </div>
  );
};

export default Button;
