import "./productRedo.css";
import QuantityPicker from "./quantityPickerRedo";

function Product() {
  return (
    <div className="product">
      <img src="https://picsum.photos/200/300" />
      <title>Title Here</title>
      <label>$Price</label>
      <label>$Total</label>
      <QuantityPicker></QuantityPicker>
      <button>Add</button>
    </div>
  );
}

export default Product;