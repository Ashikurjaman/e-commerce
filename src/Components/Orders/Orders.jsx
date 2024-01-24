import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/localstorage';

const Orders = () => {
    const product = useLoaderData()
    const [cart,setCart] = useState(product)

    const handelForDelete = (id)=>{
        const remaining = cart.filter(product => product.id != id);
        setCart(remaining);
        removeFromDb(id);
        
    }

    const handelCartDelete = ()=>{
        setCart([]);
        deleteShoppingCart()

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
                handelCartDelete={handelCartDelete}
                
                > <Link to={'/checkout'}>
                <button className='btn-review'>Review proceed</button>
                </Link>   </Cart>
            </div>
        </div>
    );
};

export default Orders;