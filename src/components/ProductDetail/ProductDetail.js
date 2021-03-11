import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css'
const ProductDetail = () => {

    const { productKey } = useParams();   // dynamically read the link parameter
    const product = fakeData.find(product => product.key == productKey);
    console.log(product);
    return (
        <div>
            <h1>Your Product Detail</h1>
            <Product key={product.key} showAddToCartButton = {false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;