import React, {useState} from 'react';
import { Burger } from '../../models/mock-products';
import ProductCard from '../product-card/product-card';
import './products-list.css';

const ProductsList = (props) => {
    const[products] = useState(Burger);
  

    return (
        <div>
            <h2 className='title'>Nos produits</h2>
            <div className='grid'>
                {products.map( product => (
                    <ProductCard key={product.id} product={product} count={props.count} setCount={props.setCount} />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;
