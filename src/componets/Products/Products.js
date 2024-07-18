import React, { useEffect, useState } from 'react';
import { baseurl } from '../../constants/constants';
import axios from 'axios';
import './Products.css';
import { Link } from 'react-router-dom'; 

function Products() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(baseurl).then((response) => {
            //console.log(response.data);
            setProduct(response.data);
        });
    }, []);

    return (
        <div className='products-list'>
            {product.map((obj) =>
                <div key={obj.id} className='product-item'>
                    <img src={obj.image} alt={obj.title} className='product-img' />
                    <h2 className='product-title'>{obj.title}</h2>
                    <p className='product-price'>₹{obj.price}</p>
                    <div className='main-btns'>
                    <Link to={`/view/${obj.id}`} className='view-btn'>View Product</Link>
                    <Link to="/cart" className='cart-btn'>Add to Cart</Link>
                    </div>
                    
                    
                </div>
            )}
        </div>
    );
}

export default Products;
