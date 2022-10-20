import { useEffect, useState } from "react";

import { useRouter } from 'next/router';
import axios from 'axios'
import React from "react";
import Card from "../../../components/Card";
import { ProductData } from "../../../types";

const Product = () => {
    const [product, setProduct] = useState<ProductData | {}>({});
    const router = useRouter()






    React.useEffect(() => {
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
            <section className="product-wrapper">
                <Card title={product.title} price={product.price} imageUrl={product.imageUrl} handleClick={() => handleBuyClick(product)} />
            </section>
        </>
    )
}

export default Product