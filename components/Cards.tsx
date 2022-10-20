import Card from "./Card";

const Cards = ({ cards, handleClick }: any) => {

    return (
        <>
            <ul className="product-card-list">
                {cards.map((prod, index) => (
                    <li key={prod + index} className="product-card">
                        <Card
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

export default Cards;