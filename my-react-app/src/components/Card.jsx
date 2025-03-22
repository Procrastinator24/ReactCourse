import "./Card.css"

import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "./cartContext.jsx";

export default function Card(product){
    const navigate = useNavigate()
    const {addToCart} = useContext(CartContext)
    return(
        <>

            <div className={"catBlock"} >
                <h3>{product.name}</h3>
                <dl>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                </dl>
                <img src={product.img} alt="SomeProduct"/>
                <button className={"showMore2"} onClick={() => navigate(`/product/${product.id}`)}>Подробнее</button>
                <button className={"showMore1"} onClick={() => {
                    addToCart(product)
                }}>Добавить в корзину
                </button>

            </div>
        </>
    )
}