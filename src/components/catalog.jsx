import "./catalog.css";
import Product from "./product";
//Catalog component
import React, { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  // state vars are INMUTABLES (cannot change)
  let [products, setProducts] = useState([]);

  const loadCatalog = () => {
    console.log("load Catalog");
    let service = new DataService();
    let data = service.getCatalog();
    setProducts(data);
    console.log("Retriedved", data);
  };

  //hook to do something when component is rendered but only the 1st time, method pass arrow function to
  useEffect(() => {
    //do whatever you want when component loads
    loadCatalog();
  }, []); //[] contains list of dependencies, when dependency change, run fn again, without dependencies listed within, runs only once

  return (
    <div className="catalog">
      <h1>Catalog: Organic Foods</h1>
      <h3>We have {products.length} Amazing Products to Choose from...</h3>
      {/* <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/> */}
      {products.map((prod) => (
        <Product key={prod._id} info={prod}></Product>
      ))}
      <h3>"At Organico... Our Products are Amazing"</h3>
      <h3>"and Our Customers are Too"</h3>
    </div>
  );
};

export default Catalog;
