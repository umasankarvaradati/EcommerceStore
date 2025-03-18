import React, { useState,useEffect,useRef } from 'react';
import './Home.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../ReduxStore/features/Authenticate/authSlice';
import { emptyCart,fetchItems } from '../../ReduxStore/features/Cart/cartSlice';
import { addFilter } from '../../ReduxStore/features/FilterOption/FilterSlice';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const username = useSelector(state => state.auth.username); // Access username from Redux state
  const sidebarRef = useRef(null);
  const location = useLocation();
  const token=useSelector(state=>state.auth.token);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(emptyCart());
    dispatch(logout());
  };

  const handleClick= () => {
    dispatch(addFilter('All'));
  }

  useEffect(() => {
    dispatch(fetchItems(token));
  });
  useEffect(() => {
  },[token]);

  

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  //to close sidebar in mobile screens
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className='header'>
        <NavLink to="/" className="logo">ShopEase</NavLink>
        <div ref={sidebarRef}>
          <ul className={`navbar ${isMobileMenuOpen ? 'open' : ''}`} >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop" onClick={handleClick}>Shop</NavLink></li>
            <li><NavLink to="/aboutus">About</NavLink></li>
            <li><NavLink to="/contactus">Contact</NavLink></li>
            <li className='cart-container-header'>
              <NavLink to="/cart" className='lg-bag'>
                <FaShoppingCart className='cart-icon' />
                {totalQuantity > 0 && <span className='cart-quantity'>{totalQuantity}</span>}
              </NavLink>
            </li>
            {username ? (
              <>
                <li className='user-name-li'><span className='username-display'>{username[0].toUpperCase()}</span></li>
                <li><NavLink to="#" onClick={handleLogout}>Logout</NavLink></li>
              </>
            ) : (
              <li className='user-login-button'><NavLink to="/login">Login</NavLink></li>
            )}
            <NavLink to="#" className='close' onClick={toggleMobileMenu}>
              <IoClose className='close-icon-io'/>
            </NavLink>
          </ul>
        </div>
        <div className='mobile'>
          {isMobileMenuOpen || <NavLink to="/cart" className='lg-bag-mobile'>
            <FaShoppingCart className='cart-icon' />
            {totalQuantity > 0 && <span className='cart-quantity-mobile'>{totalQuantity}</span>}
          </NavLink>}
          <IoMenu className='io-menu' onClick={toggleMobileMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
