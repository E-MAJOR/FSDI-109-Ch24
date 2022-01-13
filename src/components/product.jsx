import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";
//add component within product component button, lable, and button
const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    //console.log("QP changed", val); no longer needed to test
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.info.price;
    // include discounts, etc to price
    return total.toFixed(2);
  };

  const showCart = () => {
    console.log("adding to cart");
    //until you reach quantity = 1 
  };


  return (
    //always within div tag/ use same name throughout "product"
    <div className="product">
      <label className="prod-category">{props.info.category}</label>
      <img src={"/images/" + props.info.image} alt="product" />
      <h2>{props.info.title}</h2>


      <div>
        <label className="total">${(getTotal())}</label>
        <label className="price">${props.info.price.toFixed(2)}</label>
      </div>

      <div>
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        <button className="btn-add btn btn-sm btn-info" onClick={showCart}>
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;


/* 
* create a test component
*show that on that on/test page
*
*2 state variables
*1- full name
*2- email address
*
*/
