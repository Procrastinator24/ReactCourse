import {createContext, useContext} from "react";
import {CartContext} from "../components/cartContext.jsx";
import {useNavigate} from "react-router-dom";

export default function Cart(){
    const {cartItems, addToCart, removeFromCart} = useContext(CartContext)
    const total = cartItems.reduce((sum, item)=> sum+ parseFloat(item.price)*item.quantity,0)
    const navigate = useNavigate()

    return(
        <div className="cart">
            <div className="cart-body">
                <h1 className="cart-title">Ваша корзина</h1>
                {cartItems.length === 0 ? (
                    <p className="empty-cart-message">Корзина пуста</p>
                ) : (
                    <ul className="cart-items-list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <h2 className="item-name">{item.name}</h2>
                                <div className="item-controls">
                                    <p className="item-price">
                                        {item.price}$ x {item.quantity}шт
                                    </p>
                                    <button
                                        className="control-button"
                                        onClick={() => addToCart(item)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="control-button"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        -
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <h2 className="total-cost">Общая стоимость: {total.toFixed(2)}$</h2>
            </div>
        </div>
    );
};
