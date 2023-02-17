import React from "react";
import "./product-card.css";

const ProductCard = ({product, count, setCount}) => {

    function handleClick(){
        setCount([...count, [product.name, product.price]])
    }

    let price = product.price.toString();
    let cents = price.slice(-2);
    let priceShow = price.slice(0, -2) +'.' + cents + '€';

    return (
        <div key={product.id} className="productDiv">
            <h3>{product.name}</h3>
            <p><small>{priceShow}</small></p>
            <button onClick={handleClick}>Commander</button>
        </div>
    )

}

export default ProductCard;