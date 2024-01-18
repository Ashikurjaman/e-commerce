import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart ] =useState([])
    useEffect( ()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);
    const handelOrder = (product) =>{
        const addItem = [...cart ,product];
        setCart(addItem);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handelOrder={handelOrder}
                    ></Product>)
                }
            </div>
            <div className="orders">
               <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;