import React from 'react';

//describe data / function accessible to any component (global) imutable, user can not change
const store = React.createContext(
    {
        cart: [], //data imutable
        user:{},

        addProductToCart: () => {}, //functions called to modify data
        removeProductFromCart: () => {}
    }

    
);


export default store;