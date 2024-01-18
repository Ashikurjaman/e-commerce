import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
        let total = 0;
        let totalShopping = 0;
        for (const product of cart) {
            total =total+product.price;
            totalShopping =+product.shipping;
        }
        const tax = total*7/100;
        const grandTotal = total + totalShopping+ tax;

    return (
        <div className='cart'>
             <h4>Orders</h4>
                <p>Selected Items: {cart.length}</p> 
                <p>Price: {total}</p> 
                <p>Shipping  : {totalShopping}</p> 
                <p>Tax : {tax}</p>
                <h6>Grand Total :  {grandTotal}</h6>
        </div>
    );
};

export default Cart;