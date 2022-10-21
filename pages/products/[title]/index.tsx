import { useEffect, useState } from "react";

import { useRouter } from 'next/router';
import axios from 'axios'
import React from "react";
import Card from "../../../components/ProductCard";
import { ProductData } from "../../../types";
import { useUserContext } from "../../../context/UserContext";
import Link from "next/link";

const Product = () => {
    const {
        userLogin,

    } = useUserContext()
    const [product, setProduct] = useState<ProductData | {}>({});
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            const { title } = router.query;
            axios.get(`http://localhost:3000/api/products/${title}`)
                .then(response => {
                    setProduct(response.data.data);
                })
                .catch(error => console.log(error))
        }
    }, [router.isReady]);

    const handleBuyClick = (prod: ProductData) => {
        console.log(prod)
    }

    return (
        <>

            {userLogin ? <section className="product-wrapper">
                <Card title={product.title} price={product.price} imageUrl={product.imageUrl} handleClick={() => handleBuyClick(product)} />
            </section> : <h1>You need to be logged in to view this page. Please go to home page to login <Link href="/">here</Link></h1>}

        </>
    )
}

export default Product