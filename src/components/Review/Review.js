import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import happyImage from '../../images/giphy.gif'
const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    let thankYou;
    if (orderPlaced) {
       thankYou =  <img src={happyImage} alt="" />
    }
    else {

    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);
        // console.log('saved cart:', savedCart);
        // console.log('product keys:', productKeys);
        // console.log(counts);
    }, [])

    const removeProduct = (productKey) => {
        // console.log('remove product clicked');
        // console.log('Product key is:', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true)
        processOrder();
    };
    return (
        <div className='review-container'>
            <div className="item-container">
                <h1>Cart Items : {cart.length}</h1>
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;