import React, { useEffect } from 'react'
import './PlaceOrder.css'
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal } from '../cart/CalculateAmount';
import PaymentMethod from './PaymentMethod';
import {emptyCart} from '../../ReduxStore/features/Cart/cartSlice'
import { useNavigate } from 'react-router-dom';
import { deleteCart } from '../../ReduxStore/features/Cart/cartSlice';
const PlaceOrder = () => {

  const cartTotalAmount=useSelector(state=>state.cart.totalPrice);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const token=useSelector((state) => state.auth.token);
    const handleConfirmOrder=()=>{
      const cartItem={token};
      dispatch(deleteCart({cartItem,token}));
      dispatch(emptyCart());
      alert('Order Placed Successfully');
      navigate('/');
    }
    
  
  return (
    <div className='place-order-container'>
      <form className='place-order' onSubmit={handleConfirmOrder}>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' required/>
            <input type="text" placeholder='Last Name'required />
          </div>
          <input className='dummy' type="email" placeholder='Email address' required/>
          <input className='dummy' type="text" placeholder='Street' required/>
          <div className="multi-fields">
            <input type="text" placeholder='City' required/>
            <input type="text" placeholder='State' required/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code'  required />
            <input type="text" placeholder='Country' required />
          </div>
          <input className='dummy' type="text" placeholder='Phone'  required />
        </div>
        <hr/><hr/>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Order Total</h2>
            <div>
              <div className="cart-total-details">
                <p className='total-subtotal'>Subtotal</p>
                <p>${cartTotalAmount}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
              <p>Tax</p>
              <p>${cartTotalAmount?0.20:0}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b className='total-subtotal'>Total</b>
              <b className='total-subtotal'>${calculateTotal(cartTotalAmount)}</b>
            </div>
          </div>   
          <div> 
            </div>
            <PaymentMethod />
            <button className='confirm-order-button'type='submit'>Confirm Order</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default PlaceOrder