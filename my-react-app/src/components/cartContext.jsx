import {createContext, useState} from "react";
import Cart from "../pages/Cart.jsx";

export const CartContext= createContext()

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {

        const existingItem = cartItems.find((item)=> item.id === product.id)
        if (existingItem){
            setCartItems(cartItems.map((item)=>
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            ));
        }else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    }
    const removeFromCart = (productId) =>{
        const existingItem = cartItems.find((item)=> item.id === productId)
        if (existingItem.quantity > 1){
            setCartItems(cartItems.map((item)=>
                item.id === productId ? {...item, quantity: item.quantity - 1} : item
            ));
        }else{
            setCartItems(cartItems.filter((item)=> item.id !== productId));
        }
    }
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>

    )
}