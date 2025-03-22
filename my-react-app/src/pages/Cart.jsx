import {createContext, useContext} from "react";
import {CartContext} from "../components/cartContext.jsx";
import {useNavigate} from "react-router-dom";

export default function Cart(){
    const {cartItems, removeFromCart} = useContext(CartContext)
    const total = cartItems.reduce((sum, item)=> sum+ parseFloat(item.price)*item.quantity,0)
    const navigate = useNavigate()
    return(
        <div className={"listOfthingsP"}>
            <div className={"cart-body"}>
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <p>{item.price}$ x {item.quantity}шт</p>
                                <button onClick={() => {
                                    removeFromCart(item.id)
                                }}>Удалить
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <h2>Общая стоимость: {total.toFixed(2)}$</h2>

            </div>
        </div>
    )
}