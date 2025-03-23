import React, {useCallback, useContext, lazy, Suspense, useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import {createClient} from "@supabase/supabase-js";
import Card from "../components/Card.jsx";





const supbaseUrl = "https://rngeexylxgmfqpdtnwuf.supabase.co"
const supbaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZ2VleHlseGdtZnFwZHRud3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDg4NTUsImV4cCI6MjA1NzUyNDg1NX0.XiH_xyosSslDqyaZkueJ1Xja9v4w6lXblmLhxV6Ke4A"
const supbase = createClient(supbaseUrl, supbaseKey)

function Catalog() {
    const LazyCard = lazy(() => import("../components/Card.jsx"))

    const [products, setProducts] = useState([])
    const [categoryTorender, setCategoryTorender] = useState(null)
    const fetchProducts = useCallback(async()=>{
        const {data, error} = await supbase.from("products").select("*");
        if (error) {
            console.error(error)
        } else{
            setProducts(data)
        }
    }, [])


    useEffect(()=>{
        fetchProducts().catch((error) => console.error("Fetch Products error", error))
    }, [fetchProducts]);

    const [categories, setCategories] = useState([])

    const fetchCategories = useCallback(async()=>{
        const {data, error} = await supbase.from("category").select("*");
        if (error) {
            console.error(error)
        } else{
            setCategories(data)
        }
    }, [])


    useEffect(()=>{
        fetchCategories().catch((error) => console.error("Fetch Products error", error))
    }, [fetchCategories]);

    const fetchCategoriesProducts = useCallback(async(ID)=>{
        const {data, error} = await supbase.from("products").select().eq("category_id", ID);
        if (error) {
            console.error(error)
        } else{
            setProducts(data)
        }
    }, [])


    useEffect(()=>{
        fetchCategoriesProducts().catch((error) => console.error("Fetch Products error", error))
    }, [fetchCategoriesProducts]);

    return(

        <div className="catalog">
            <h1 className="catalog-title">Каталог товаров</h1>
            <div className="catalog-content">
                <div className="categories-section">
                    <h2 className="categories-title">Категории</h2>
                    <ul className="categories-list">
                        <li
                            className="category-item"
                            onClick={fetchProducts}
                        >
                            Все товары
                        </li>
                        {categories.map((category) => (
                            <li
                                key={category.id}
                                className="category-item"
                                onClick={() => fetchCategoriesProducts(category.id)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="products-section">
                    <h2 className="products-title">Товары</h2>
                    <div className="products-list">
                        <Suspense fallback={<p className="loading">Загрузка...</p>}>
                            {products.map((product) => (
                                <Card key={product.id} {...product} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Catalog;