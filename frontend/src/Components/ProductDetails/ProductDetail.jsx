import React from 'react'
import './ProductDetail.css'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from '../../ReduxStore/features/Products/productSlice'
const ProductDetail = () => {
    const dispatch=useDispatch();
    const product = useSelector(state => state.products.storeProducts);
    dispatch(fetchProducts());
    const {image,id,price,name,description} = product[0];
  return (
    <div>
        <div className="detail-container">
            <div className="detail-left">
                <img src={image} alt="" />
            </div>
            <div className="detail-right">
                <div className="detail-title"><p>{name}</p></div>
                <div className="detail-description"><p>{description}</p></div>
                <div className="detail-price">
                    <p className='detail-price-title'>Price:</p>
                    <p className='detail-price-amount'>${price}</p>
                </div>
                <div className="detail-size">
                    <p>Size</p>
                    <div className="detail-each-size">
                        <div className='each-size'><p>S</p></div>
                        <div className='each-size'><p>M</p></div>
                        <div className='each-size'><p>L</p></div>
                        <div className='each-size'><p>XL</p></div>
                        <div className='each-size'><p>XXL</p></div>
                    </div>
                </div>
                <div className="detail-add-to-cart"><p>Add to cart</p></div>
                <button className="detail-buy-now"><p>Buy Now</p></button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail