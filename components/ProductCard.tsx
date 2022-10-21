import router from "next/router";
import Button from "./Button";

const ProductCard = ({ title, price, imageUrl, handleClick, type }: any) => {


    const handleGoBack = () => {
        router.push("/products")
    }

    return (
        <>
            <section className="card">
                <figure className="product-item-image">
                    <img src={imageUrl} alt={title} />
                </figure>
                <div className="product-info-content">
                    <div className="product-info">
                        <h2 className="product-title">{title}</h2>
                        <p>
                            {price}<span>&#36;</span>
                        </p>
                    </div>
                    {type === 'inspect' ? <>
                        <div className="button-wrapper">
                            <Button onClick={handleClick} text="Inspect" />
                        </div>
                    </> :
                        <div className="button-wrapper">
                            <Button onClick={handleClick} text="Buy" />
                            <Button onClick={handleGoBack} text="Go back" />
                        </div>
                    }

                </div>
            </section>
        </>
    );

}

export default ProductCard;