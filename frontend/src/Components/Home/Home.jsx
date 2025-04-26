import React,{ useState} from 'react';
import BannerSlider from './BannerSlider';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addFilter } from '../../ReduxStore/features/FilterOption/FilterSlice';
import { BROWSE_BY_CATEGORY } from '../../assets/fetchAPIS';
const Home = () => {
  const imgFile=[{name:"Shirts",image:"shirt.png"},{name:"Pants",image:"pants.png"},{name:"Shoes",image:"Shoes.png"},{name:"Caps",image:"Caps.png"},{name:"T-shirts",image:"tshirts.png"}];
  const top_trending=["top_trending.jpg","top_trending1.jpg"]
  const dispatch=useDispatch();
  
  const handleClick = (e) => {
    e.stopPropagation();
    const category = e.target.name;
    dispatch(addFilter(category));
  }
  
  

  
  return (
    <div className='home-container'>
      <div className='home-slider'>
        <BannerSlider  />
      </div>

      <div className="home-category">
        <h1>Browse by Category</h1>
        <div className="category-img" onClick={handleClick}>
          {
            imgFile.map((img,index)=>(
              <div key={index}>
                <Link to="/shop"><img src={BROWSE_BY_CATEGORY+img.image} alt="" name={img.name.toLowerCase()}/></Link>
                <p>{img.name}</p>
              </div>))
          }
        </div>
      </div>

      <div className='home-checkout'>
        <h1>CheckOut</h1>
        <div className='checkout-text-reverse'>
          <img src={BROWSE_BY_CATEGORY+top_trending[0]} alt="" />
            <div >
              <h1>Top Trending</h1>
              <p>
                Both men are wearing baseball caps, indicating that these accessories remain fashionable.
              </p>
            </div>
        </div>
        <div>
          <div>
            <h1>Coming Soon</h1>
            <p>
                The man on the right is wearing a white, sheer, knitted shirt and white pants
            </p>
          </div>
          <img src={BROWSE_BY_CATEGORY+top_trending[1]} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Home