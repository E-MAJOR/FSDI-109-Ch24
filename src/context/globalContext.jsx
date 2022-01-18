import React, { useState } from 'react';
import storeContext from "./storeContext";

//actually stores the data, a grapper component
const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const myAddProductToCart = (product) => {
        console.log("adding to cart", product);
        //can not push straight to original cart because is imutable, therefore create copy
        //let copy = cart; does not create an independent copy, changing copy changes original, therefore use spread operator
        let copy = [...cart]; //new array and inside all of original contents, for copy of object {...object}, creating a "clone", not copy
        copy.push(product); 
        setCart(copy);
    };
    const myRemoveProductFromCart = () => {
        console.log("removing from cart");
    };

    return (
        <storeContext.Provider 
            value = {{
                cart: cart, 
                user: user,

                addProductToCart: myAddProductToCart,
                removeProductFromCart: myRemoveProductFromCart,
        }}>
            {props.children}
        </storeContext.Provider>
    );

};
//we have application and seperate context
export default GlobalContext;