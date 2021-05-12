// import React, { useState } from "react";
import './Button.css';

function Button({ classes,text, ...props }) {
    return (
        <a href="#">
            <div className={`btn ${classes}`}>{text}</div>
        </a>
    );
}

export default Button;