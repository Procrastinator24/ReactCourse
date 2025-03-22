import Header from "../components/Header.jsx"
import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useContext, useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";
import {CartContext} from "../components/cartContext.jsx";
import {FeedBackFormPortal} from "../components/FeedBackFormPortal.jsx";


const supbaseUrl = "https://rngeexylxgmfqpdtnwuf.supabase.co"
const supbaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZ2VleHlseGdtZnFwZHRud3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDg4NTUsImV4cCI6MjA1NzUyNDg1NX0.XiH_xyosSslDqyaZkueJ1Xja9v4w6lXblmLhxV6Ke4A"
const supbase = createClient(supbaseUrl, supbaseKey)

function Product() {
    const {addToCart} = useContext(CartContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const cart = ["1"]

    const fetchProduct = useCallback(async()=>{
        console.log(id)
        const {data, error} = await supbase.from("products").select().eq('id', id);
        if (error) {
            console.error(error)
        } else{
            console.log(data)
            setProduct(data)
        }
    }, [id, setProduct])


    useEffect(()=>{
        fetchProduct().catch((error) => console.error("Fetch Product error", error))
    }, [fetchProduct]);
    if(!product) return <h1>Product not found</h1>

    return(

        <div>
            <h1>{product[0].name}</h1>
            <p>{product[0].description}</p>
            <p>Price: {product[0].price}</p>
            <button onClick={() => {
                addToCart(product[0])
            }}>Add to cart
            </button>
            <button onClick={() => {
                if (cart.length === 0) {
                    return console.log("Корзина пуста")
                } else {
                    return navigate("/cart")
                }
            }}>В корзину
            </button>


        </div>
    )

}

export default Product;