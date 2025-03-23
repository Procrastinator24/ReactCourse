import "./Card.css"

import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "./cartContext.jsx";

export default function Card(product){
    const navigate = useNavigate()
    const {addToCart} = useContext(CartContext)
    return(
        <div className="card">
            <img src={product.img} alt={product.name} className="card-image" />
            <h3 className="card-title">{product.name}</h3>
            <div className="card-price">
                <span className="price-label">Цена:</span>
                <span className="price-value">{product.price}$</span>
            </div>
            <div className="card-buttons">
                <button
                    className="card-button details-button"
                    onClick={() => navigate(`/product/${product.id}`)}
                >
                    Подробнее
                </button>
                <button
                    className="card-button add-to-cart-button"
                    onClick={() => addToCart(product)}
                >
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
}