import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, quantity } = props.product;

    return (
        <div className='review-item'>
            <h4>Name: {name}</h4>
            <h4>Quantity: {quantity}</h4>
            <button className= 'main-button'>remove</button>
        </div>
    );
};

export default ReviewItem;