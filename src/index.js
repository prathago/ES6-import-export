import React from "react";
import ReactDOM from "react-dom";
import * as n from "./calculator.js";
/** or we can also do as import {add, subtract, multiply, divide} from "./calculator.js";*/

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{n.add(1, 2)}</li>
    <li>{n.multiply(2, 3)}</li>
    <li>{n.subtract(7, 2)}</li>
    <li>{n.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
