import React from 'react'
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import Favoritebook from './Favoritebook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';


const Home = () => {
  return (
    <div className='text-white p-3 overflow-hidden bg-black'>
      <Banner />
      <BestSellerBooks />
      <Favoritebook />  
      <PromoBanner />  
      <OtherBooks />   
      <Review />      
    </div>
  )
}

export default Home;
