import "./catalog.css";
import Product from "./product";

function Catalog() {
    return(
        <div className="catalog">
            <h1>This is my Catalog</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;