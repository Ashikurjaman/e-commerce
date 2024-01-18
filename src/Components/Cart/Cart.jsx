import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
        let total = 0;
        for (const product of cart) {
            total =total+product.price;
        }

    return (
        <div className='cart'>
             <h4>Orders</h4>
                <p>Selected Items: {cart.length}</p> 
                <p>Price: {total}</p> 
                <p>Total Shipping Charge : {total}</p> 
                <p>Tax : </p>
                <h6>Grand Total : </h6>
        </div>
    );
};

export default Cart;