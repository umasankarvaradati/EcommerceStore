import React, { useEffect } from 'react'
import './cart.css'
import { NavLink } from 'react-router-dom';
import CartItems from './CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './CalculateAmount';
import { fetchItems } from '../../ReduxStore/features/Cart/cartSlice';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const cartTotalAmount = useSelector((state) => state.cart.totalPrice);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchItems(token));
        if (!token) {
            navigate('/');
        }
    }, [token])
    return (
        <div className='cart-container'>
            <h3 className='cart-title'>Your Cart</h3>
            <div className="container">
                {token && cartItems?
                    <div>
                        {
                            cartItems.map((item) => {
                                return <CartItems key={item.id} item={item} />
                            })
                        }
                    </div>:<div className='cart-empty-div'><button>Your Cart is Empty!</button></div>
                }
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="cart-total-details">
                                <p className='total-subtotal'>Subtotal</p>
                                <p>${cartTotalAmount}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Tax</p>
                                <p>${cartTotalAmount ? 0.2 : 0}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b className='total-subtotal'>Total</b>
                                <b className='total-subtotal'>${calculateTotal(cartTotalAmount)}</b>
                            </div>

                        </div>

                    </div>
                </div>
                <NavLink to='/payment'><button className='checkout-button-cart'>Proceed to checkout</button></NavLink>
            </div>
        </div>
    )
}

export default Cart