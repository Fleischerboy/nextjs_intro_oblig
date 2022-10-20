import { useEffect, useState } from "react"
import Cards from "../../components/Cards";
import { ProductData } from "../../types";
import Router from 'next/router'

const Products = () => {

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
        <div className="product-container">
            <Cards cards={products} handleClick={handleClick} />
        </div>


    </>
    )

}

export default Products


