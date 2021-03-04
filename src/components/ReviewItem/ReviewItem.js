import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, quantity } = props.product;

    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Quantity: {quantity}</h4>
        </div>
    );
};

export default ReviewItem;