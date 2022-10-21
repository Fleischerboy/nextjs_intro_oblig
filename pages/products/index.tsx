import { useEffect, useState } from "react"
import { ProductData } from "../../types";
import Router from 'next/router'
import ProductCards from "../../components/ProductCards";
import { useUserContext } from "../../context/UserContext";
import Link from "next/link";

const Products = () => {

    const {
        userLogin,

    } = useUserContext()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products', {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setProducts(data.data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])


    const handleClick = (prod: ProductData) => {
        Router.push(`/products/${prod.title}`)
    }

    return (<>
        {userLogin ? <div className="product-container">
            <ProductCards ProductCards={products} handleClick={handleClick} />
        </div> : <h1>You need to be logged in to view this page. Please go to home page to login <Link href="/">here</Link></h1>}



    </>
    )

}

export default Products


