import React, { useState } from "react";
import isPrime from './logic';
import './App.css';



export default function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
    setResult("");
  }

  const handleClick = _ => {
    // if value is not a number, return result as error
    if (isNaN(value)) {
      setResult("ERROR");
    } else if (value === "") {
      setResult("NOENTRY") //this will trigger the default case in the below switch statement, so will prompt for the user to input a value
    } else {
      const res = isPrime(parseInt(value, 10)) ? "YES": "NO";
      setResult(res);
    }
  }

  let text = "";

  switch(result) {
    case "YES":
      text = `${value} is a prime number`;
      break;
    case "NO":
      text = `${value} is not a prime number`;
      break;
    case "ERROR":
      text = `${value} is not a number`;
      break;
    default:
      text = `Please input a number and select 'check'`;
  }

  return (
    <div className="App">
      <h1 className="title">Prime Number Checker </h1>
        <div className="entryText">Enter a number to check if it is prime</div>
        <input type="text" className="input" value={value} onChange={handleChange}/>
      <div>
        <button className="button" onClick={handleClick}>Check</button>
      </div>
      <div>{text}</div>
    </div>
  );
}


