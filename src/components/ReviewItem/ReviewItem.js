import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, quantity,price } = props.product;
    const removeProduct = props.removeProduct;
    return (
        <div className='review-item'>
            <h4>Name: {name}</h4>
            <p><small>price: {price}</small></p>
            <h4>Quantity: {quantity}</h4>
            <button onClick={() => removeProduct(props.product.key)}  className= 'main-button'>remove</button>
        </div>
    );
};

export default ReviewItem;