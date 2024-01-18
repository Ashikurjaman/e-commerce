/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
        let total = 0;
        let totalShopping = 0;
        let quantity = 0;
        for (const product of cart) {
            // if(product.quantity === 0){
            //     product.quantity = 1
            // }
            total =total+product.price * product.quantity;
            totalShopping +=product.shipping * product.quantity;
            quantity +=product.quantity;
        }
        const tax = total*7/100;
        const grandTotal = total + totalShopping+ tax;

    return (
        <div className='cart'>
             <h4>Orders</h4>
                <p>Selected Items: {quantity}</p> 
                <p>Price: {total}</p> 
                <p>Shipping  : {totalShopping}</p> 
                <p>Tax : {tax}</p>
                <h6>Grand Total :  {grandTotal}</h6>
        </div>
    );
};

export default Cart;