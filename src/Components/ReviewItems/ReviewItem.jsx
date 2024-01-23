import React from 'react';
import './reviewItem.css';
const ReviewItem = ({products}) => {
    const {img,price,quantity,name,shipping} = products;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;