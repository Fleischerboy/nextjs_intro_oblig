import Button from "./Button";

const Card = ({ title, price, imageUrl, handleClick, type }: any) => {




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
                        </div>
                    }

                </div>
            </section>
        </>
    );

}

export default Card;