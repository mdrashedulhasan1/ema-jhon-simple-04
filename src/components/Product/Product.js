import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { name, seller, price, stock, img } = props.product;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h1 className='product-name-color'>{name}</h1>
                <p><small>by:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>Only {stock} left in stock - ordered soon...</small></p>
                <button onClick={()=> props.handelAddToCart(props.product)} className='btn-style'><FontAwesomeIcon icon={faShoppingCart} />Buy Now!</button>
            </div>
        </div>
    );
};

export default Product;