// import React, { useState } from "react";
import './Card.css';

function Card({ img, titr, alt, classes, widthImageClass, ...props }) {
  // const [activeFirst, setTasks] = useState()
  return (
    <a href="#" className={`card flex-column-center ${classes}`}>
      <img src={img} className={`${widthImageClass}`} alt={alt} />
      <h3 className="text-center">{titr}</h3>
      <div className="active displayNone"></div>
    </a>
  );
}

export default Card;
{/* <div id="nonvayiIdIcon"></div> */}


