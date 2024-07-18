import React from 'react';
import './Homepage.css';
import Rowposts from '../Rowposts/Rowposts';
import { jewelery,mens,women,electronics } from '../../constants/constants';


function Homepage() {


    return (
        <div className='home-page'>
            <div className='banner-carousel'>
                <div className='carousel-inner'>
                    <img src="/Images/Banners/banner1.jpg" alt="banner1" />
                    <img src="/Images/Banners/banner2.jpeg" alt="banner2" />
                    <img src="/Images/Banners/banner3.jpeg" alt="banner3" />
                    <img src="/Images/Banners/banner6.jpeg" alt="banner6" />
                    <img src="/Images/Banners/banner7.jpeg" alt="banner7" />
                </div>

                
            </div>

            <Rowposts api={mens} title='Mens'/>
            <Rowposts api={women} title='womens'/>
            <Rowposts api={jewelery} title='jewelery'/>
            <Rowposts api={electronics} title='Electronics'/>
            
            

           
        </div>
    );
}

export default Homepage;
