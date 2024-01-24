import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/localstorage';

const Orders = () => {
    const product = useLoaderData()
    const [cart,SetCart] = useState(product)

    const handelForDelete = (id)=>{
        const remaining = cart.filter(product => product.id != id);
        SetCart(remaining);
        removeFromDb(id);
        
    }
    return (
        <div className='shop-container'>
            <div className='order-item'>
                {
                    cart.map(products => <ReviewItem  
                    key={products.id}
                    products={products}
                    handelForDelete={handelForDelete}
                    />)
                }
            </div>
            <div className='orders'>
                <Cart cart={cart} 
                
                
                />
            </div>
        </div>
    );
};

export default Orders;