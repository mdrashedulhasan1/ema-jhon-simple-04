import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    for(const product of cart){
        total = total+product.price;
    }
    return (
        <div>
            <h1>Summery:</h1>
            <h3>Ordered Items:{cart.length}</h3>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cart;