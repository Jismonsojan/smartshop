import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Rowposts.css'; 
import { Link } from 'react-router-dom';

function Homepage(props) {
    const [productlist, setproductlist] = useState([]);

    useEffect(() => {
        axios.get(props.api).then((response) => {
            console.log(response.data);
            setproductlist(response.data);
        });
    }, []);

    return (
        <div className='rowproducts'>
            <div className='show-products'>
                <h2 className='products-title'>{props.title}</h2>
                <div className='products-grid'>
                    {productlist.slice(0,4).map((obj) =>
                        <div key={obj.id} className='productslist'>
                            <img src={obj.image} alt={obj.title} className='productslist_image' />
                            <p className='productslist_title'>{obj.title}</p>
                            
                            <Link to={`/view/${obj.id}`} className='view-btn'>View Product</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
