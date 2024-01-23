import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Orders.css'

const Orders = () => {
    const product = useLoaderData()
    return (
        <div className='shop-container'>
            <div className='order-item'>
                {
                    product.map(products => <ReviewItem  
                    key={products.id}
                    products={products}
                    />)
                }
            </div>
            <div className='orders'>
                <Cart cart={product}/>
            </div>
        </div>
    );
};

export default Orders;