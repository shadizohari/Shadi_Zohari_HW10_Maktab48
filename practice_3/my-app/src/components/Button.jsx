// import React, { useState } from "react";
// import './Button.css';

function Button({ classes, text, handelClick, value, ...props }) {
    return (

        <button className={`button ${classes}`} value={value} onClick={handelClick}>{text}</button>

    );
}

export default Button;