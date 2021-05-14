import React, { useState } from 'react';
import Button from './components/Button';
import ShowBox from './components/ShowBox';

// import './App.css';
import './css/main.css';


function App() {
  let buttons = [
    {
      value: 1,
      text: 1,
      classes: ""
    }, {
      value: 2,
      text: 2,
      classes: ""
    }, {
      value: 3,
      text: 3,
      classes: ""
    }, {
      value: 4,
      text: 4,
      classes: ""
    }, {
      value: 5,
      text: 5,
      classes: ""
    }, {
      value: 6,
      text: 6,
      classes: ""
    }, {
      value: 7,
      text: 7,
      classes: ""
    }, {
      value: 8,
      text: 8,
      classes: ""
    }, {
      value: 9,
      text: 9,
      classes: ""
    }, {
      value: 0,
      text: 0,
      classes: ""
    }, {
      value: "*",
      text: "x",
      classes: ""
    }, {
      value: "/",
      text: "/",
      classes: ""
    }, {
      value: "+",
      text: "+",
      classes: ""
    }, {
      value: "-",
      text: "-",
      classes: ""
    }, {
      value: "c",
      text: "c",
      classes: "clear"
    }, {
      value: "=",
      text: "=",
      classes: "equalButton"
    }
  ]

  const [state, setState] = useState({
    result: 0,
    flag_do_replace: true,
    operator: null,
    operand_1: 0,
    operand_2: 0
  })

  const MAX_LENGTH = 10;

  let reset = function () {
    setState({
      result: 0,
      flag_do_replace: true,
      operator: null,
      operand_1: 0,
      operand_2: 0
    })
  }

  function formatResult(result) {
    result = String(result);
    if (result.length > MAX_LENGTH) {
      let dotIndex = result.indexOf(".");
      if (dotIndex < 0 || dotIndex > MAX_LENGTH - 1) {
        console.log("error")
        return "Too Large!";
      } else {
        console.log("error2")
        return Number(result).toFixed(MAX_LENGTH - 1 - dotIndex);
      }
    }
    return Number(result)
  }

  const onclickHandel = function (value) {
    let {
      result,
      flag_do_replace,
      operator,
      operand_1,
      operand_2
    } = state;

    // if pressed a number key
    if (!(isNaN(value))) {
      if (flag_do_replace) {
        result = value
        flag_do_replace = false
      } else {
        if (String(result).length < MAX_LENGTH) {
          let newvalue = String(result) + String(value)
          result = newvalue
        }
      }
    } else if (value === "c") {
      reset();
      return true;
    } else if (value === "=") {
      operand_2 = Number(result)

      if (operator === "+") {
        result = Number(operand_1) + Number(operand_2);
      } else if (operator === "-") {
        result = Number(operand_1) - Number(operand_2);
      } else if (operator === "*") {
        result = Number(operand_1) * Number(operand_2);
      } else if (operator === "/") {
        result = Number(operand_1) / Number(operand_2);
        console.log(result)
      }
      result = formatResult(result);
      flag_do_replace = true

    } else {
      operand_1 = result
      flag_do_replace = true
      operator = value
    }
    setState({
      result: result,
      flag_do_replace: flag_do_replace,
      operator: operator,
      operand_1: operand_1,
      operand_2: operand_2
    })
  }


  return (
    <div>
      <div className="calculator">
        <div className="title">
          <h5><b>ELECTRONIC CALCULATOR</b></h5>
        </div>
        <ShowBox result={state.result} />
        <div className="had-buttons">
          <div className="row">
            {buttons.map((btn, index) => {
              return (
                <Button handelClick={() => onclickHandel(btn.value)} key={btn.value} classes={btn.classes} text={btn.text} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
