// import React, { useState } from "react";
import './Card.css';

function Card({ img, titr, alt, classes, widthImageClass,onclickHandel,active,cardId, ...props }) {
  // const [activeFirst, setTasks] = useState()
  return (
    <a href="#" className={`card flex-column-center ${classes}`} onClick={()=>onclickHandel(cardId)}>
      <img src={img} className={`${widthImageClass}`} alt={alt} />
      <h3 className="text-center">{titr}</h3>
      <div className={`active ${active}`}></div>
    </a>
  );
}

export default Card;



