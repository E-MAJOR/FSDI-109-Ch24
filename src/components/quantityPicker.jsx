import "./quantityPicker.css";
import React, { useState } from "react"; //why do you state 'react' twice?
const QuantityPicker = (props) => {
  //need counter, save internal state of the value of how many, useState function imported from React, done above
  //starting at quantity = 1, useState allows to ways to use storage, returns 2 things 1 is quantity variable for getting or reading value, 2 is setQuantity a function referrence, to set new value to quantity, to write new value to quantity
  const [quantity, setQuantity] = useState(1);
  //create function increment with an arrow function, saving a fuction within increment variable, in react always arrow (=>) functions
  const increment = () => {
    //which is added to button onClick below
    console.log("increment example");
    //increment value of quantity not +=, use setQuantity
    let val= quantity + 1;
    setQuantity(val);
    props.onChange(val);
  };

  const decrement = () => {
    console.log("decrement example");
    //until you reach quantity = 1
    let val= quantity - 1;
    if (quantity > 1) { setQuantity(val);
    props.onChange(val);
    }
  };

  return (
    <div className="quantityPicker">
      <button className="btn btn-sm btn-info" onClick={decrement}>-</button>
      <label> {quantity} </label>
      <button className="btn btn-sm btn-info" onClick={increment}>+</button>
    </div>
  );
};

export default QuantityPicker;

// read on diff between arrow and traditional functions
//let within section of a function, ex for loop
//var exists within the whole function, global variables
//use only arrow functions in react, to be able to use this.
