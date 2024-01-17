import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props);
    const {img,name,seller,price,stock,ratings,quantity} = props.product;
    const handelOrder = props.handelOrder;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
            <div className='product-info'>
            <h6>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p>Manufacture: ${seller}</p>
            <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={()=>handelOrder(props.product)} className='btn'>Add To Cart
            <FontAwesomeIcon icon={faCartShopping} />
            </button>
            </div>
        </div>
    );
};

export default Product;