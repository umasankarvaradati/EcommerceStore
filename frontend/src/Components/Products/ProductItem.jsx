import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addCart } from '../../ReduxStore/features/Cart/cartSlice';
import { assets } from '../../assets/assets';
import './Products.css';

const ProductItem = ({ item }) => {
    const { id, name, price, image } = item;
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token, shallowEqual);

    const handleAddToCart = useCallback(() => {
        if (token) {
            const cartItem = {
                token,
                product_id: id,
                quantity: 1
            };
            dispatch(addCart({cartItem,token}));
        } else {
            alert('Please login to add to cart');
        }
    }, [dispatch, token, id]);

    return (
        <div className='product-item'>
            <div className='dress-item'>
                <div className="dress-item-img-container">
                    <div className="image-scroll-container">
                        <img className='dress-item-image' src={image} alt={name} />
                    </div>
                </div>
                <div className="dress-item-info">
                    <div className="dress-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                    <div className="dress-item-bottom">
                        <p className="dress-item-price">${price}</p>
                        <button className='add-to-cart-product' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProductItem);
