import {React} from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { addCart, deleteCart } from '../../ReduxStore/features/Cart/cartSlice';

const CartItems = ({item}) => {
    const {product, quantity} = item;
    const {id, image, name, price} = product;
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const handleAddToCart = (id) => {
        const cartItem = {
            token, 
            product_id: id,
            quantity: 1 
        };
        dispatch(addCart({cartItem,token}));
    };
    
    const handleRemoveFromCart = (id) => {
        const cartItem = {
            token,
            product_id: id,
            quantity: -1 
        };
        dispatch(addCart({cartItem,token}));
    };

    const handleRemoveProductFromCart = (id) => {
        const cartItem = {
            token,
            product_id: id,
        };
        dispatch(deleteCart({cartItem,token}));
    }

    
    return (
        <div className="cart-item">
            <div className="cart-item-left">
                <img src={image} alt={name} className="cart-item-image" />
            </div>
            <div className="cart-item-right">
                <div className="cart-item-info">
                    <div className='cart-item-title'>{name}</div>
                    <div className="cart-item-price">${price}</div>
                </div>
                <div className="cart-item-actions">
                    <button className='remove' onClick={() => handleRemoveFromCart(id)}><span>-</span></button>
                    <span>{quantity}</span>
                    <button className='add' onClick={() => handleAddToCart(id)}>+</button>
                    <MdDeleteForever className='remove-from-cart-button' onClick={() => handleRemoveProductFromCart(id)}/>   
                </div>
            </div>
        </div>     
    )
}

export default CartItems;
