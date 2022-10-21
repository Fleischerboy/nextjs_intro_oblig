import ProductCard from "./ProductCard";


const ProductCards = ({ ProductCards, handleClick }: any) => {

    return (
        <>
            <ul className="product-card-list">
                {ProductCards.map((prod, index) => (
                    <li key={prod + index} className="product-card">
                        <ProductCard
                            title={prod.title}
                            price={prod.price}
                            imageUrl={prod.imageUrl}
                            handleClick={() => handleClick(prod)}
                            type="inspect"
                        />
                    </li>
                ))}
            </ul>

        </>
    )


}

export default ProductCards;