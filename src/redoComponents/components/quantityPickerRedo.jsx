import "./quantityPickerRedo.css";
import React, {useState} from "react";

function QuantityPicker() {
  const[quantity, setQuantity] = useState[1];

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="quantityPicker">
      <button className="decrement"> - </button>
      <label>{quantity}</label>
      <button className="increment"> + </button>
    </div>
  );
}

export default QuantityPicker;