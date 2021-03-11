import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + (prd.price * prd.quantity), 0);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    let shippingCost = 12.99;
    if (totalPrice > 35) {
        shippingCost = 0;
    }
    else if (totalPrice > 15) {
        shippingCost = 4.99;
    }
    else if (totalPrice === 0) {
        shippingCost = 0;
    }
    const tax = (totalPrice / 10).toFixed(2);

    const grandTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart; <h4>Order Summary:</h4>