import React from 'react';
import './reviewItem.css';
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewItem = ({products,handelForDelete}) => {
    const {img,price,quantity,name,shipping,id} = products;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p>Price:<span className='review-color'> {price}</span></p>
                <p>Order Quantity:<span className='review-color'> {quantity}</span></p>
                
            </div>
            <button onClick={()=>handelForDelete(id)} className='btn-delete'>
                <FontAwesomeIcon className='font-aw-color' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;