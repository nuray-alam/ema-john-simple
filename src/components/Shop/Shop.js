import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const handleAddProduct = (product) =>{
        console.log("Product is clicked",product);
        const newCart = [...cart, product];
        setCart(newCart);
    };

    const [cart, setCart] = useState([]);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key = {product.key} handleAddProduct = {handleAddProduct} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;