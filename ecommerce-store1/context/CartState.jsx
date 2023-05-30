import React, { useState } from "react";
import CartContext from "./CartContent";

const CartState = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([])
    const addProduct = (id) =>{
        setCartProduct((prev)=>[...prev, id])
    }
    return(
        <CartContext.Provider value={{cartProduct, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartState