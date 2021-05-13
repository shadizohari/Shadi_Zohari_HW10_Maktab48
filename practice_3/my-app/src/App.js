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
      value: "&divide;",
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

  const MAX_LENGTH = 8;

  let reset = function () {
    setState({
      result: 0,
      flag_do_replace: true,
      operator: null,
      operand_1: 0,
      operand_2: 0
    })
  }

  let formatResult = function (result) {
    result = String(result);
    if (result.length > MAX_LENGTH) {
      let dotIndex = result.indexOf(".");
      if (dotIndex < 0 || dotIndex > MAX_LENGTH - 1) {
        setState({ result: "Error: number too big" })
      } else {
        let x = Number(result).toFixed(MAX_LENGTH - 1 - dotIndex)
        setState({ result: x })
      }
    }
    setState({
      result: result
    })
  }

  const onclickHandel = function (value) {
    // let {
    //   result,
    //   flag_do_replace,
    //   operator,
    //   operand_1,
    //   operand_2
    // } = state;

    // if pressed a number key
    if (!(isNaN(value))) {
      if (state.flag_do_replace) {
        setState({
          result: value,
          flag_do_replace: false
        })
      } else {
        console.log("dont replace")
        console.log(state.flag_do_replace)
        if (String(state.result).length < MAX_LENGTH) {
          let newvalue = String(state.result) + String(value)
          setState({ result: newvalue })
        }
      }
    } else if (value === "c") {
      console.log(state)
      reset();

    } else if (value === "=") {
      setState((state, props) => ({
        operand_2: Number(state.result),
        operand_1: Number(state.operand_1),
        operator: state.operator
      }))
      if (state.operator == "+") {
        console.log("ok")
        formatResult(state.operand_1 + state.operand_2);
      } else if (state.operator === "-") {
        formatResult(state.operand_1 - state.operand_2);
      } else if (state.operator === "*") {
        formatResult(state.operand_1 * state.operand_2);
      } else if (state.operator === "/") {
        formatResult(state.operand_1 / state.operand_2);
      }
      reset();
    } else {
      setState((state, props) => ({
        operand_1: Number(state.result),
        flag_do_replace: true,
        operator: value,
        result: state.result,
        operand_2: null
      }))

    }
    // set
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
