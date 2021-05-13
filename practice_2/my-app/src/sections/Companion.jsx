import React, { useState } from 'react'
import '../index.css'
import './Companion.css';
import '../components/Card.css'
import Card from '../components/Card'
import breadSlice from '../img/bread.png'
import restaurant from '../img/restaurant.png'
import hotel from '../img/hotel.png'
import kharobar from '../img/kharobar.png'


function Companion() {

  const [state, setstate] = useState([
    {
      id: 1,
      classes: "width-card margin",
      titr: "نانوایی و قنادی",
      img: breadSlice,
      widthImageClass: "img-card",
      active: "displayNone",
    }, {
      id: 2,
      classes: "width-card margin",
      titr: "رستوران و کافه",
      img: restaurant,
      widthImageClass: "img-card",
      active: "show",
    },
    {
      id: 3,
      classes: "width-card margin",
      titr: "هتل",
      img: hotel,
      widthImageClass: "img-card",
      active: "displayNone",
    },
    {
      id: 4,
      classes: "width-card margin",
      titr: "سوپر مارکت",
      img: kharobar,
      widthImageClass: "img-card",
      active: "displayNone",
    }
  ])

  const onclickHandel = function (cardId) {
    for (let i = 0; i < state.length; i++) {
      if (cardId !== state[i].id) {
        state[i].active = "displayNone";
      } else {
        state[i].active = "show"
      }
    }
    let newstate = [...state]
    setstate(newstate)
  }


  return (
    <div className="container">
      <h1 className="text-center">بهترین همراهان ما</h1>
      <div className="cards">
        {state.map((card, index) => {
          return (
            <Card onclickHandel={() => onclickHandel(card.id)} key={card.id} classes={card.classes} titr={card.titr} img={card.img} alt={card.titr} widthImageClass={card.widthImageClass} active={card.active} />
          )
        })}

      </div>
    </div>
  );
}

export default Companion;
