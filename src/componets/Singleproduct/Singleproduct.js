import React, { useState, useEffect } from 'react';
import './Singleproduct.css';
import axios from 'axios';
import { baseurl } from '../../constants/constants';
import { useParams } from 'react-router-dom';

export default function Singleproduct() {
  let {id} = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    axios.get(`${baseurl}/${id}`).then((response) => {
      // console.log(response.data);
      setSingleProduct(response.data);

    });
  }, [id]);

  if (!singleProduct) {
    return <div>oops... ERROR</div>;
  }

  return (
    <div className='sp-pdct-mn'>
      
      <div className='sp-product-image'>
        <img src={singleProduct.image} alt={singleProduct.title} className='sp-product-img' />
      </div>
      <div className='sp-product-details'>
        <h2>{singleProduct.title}</h2>
        <p className='sp-rating'>{singleProduct.rating ? `${singleProduct.rating.rate} Rating` : 'No rating available'}</p>
        <p className='sp-category'>Category: {singleProduct.category}</p>
        <h4>{singleProduct.description}</h4>
        <p className='sp-price'>₹{singleProduct.price}</p>
        <div className='sp-button-container'>
          <button className='sp-add-to-cart'>Add to Cart</button>
        </div>
        
      </div>
    </div>
  );
}
