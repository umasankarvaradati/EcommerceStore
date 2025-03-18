import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../ReduxStore/features/FilterOption/FilterSlice';
import './Products.css';
const Filterpage = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        if (e.target.name === 'clear') {
            setOpen(!open);
            dispatch(addFilter('All'));
        }else{
            dispatch(addFilter(e.target.name));
        }
    }
    

  return (
    <div className='filterpage-container'>
        

        {!open? <div  className='filter-button'><button onClick={() => setOpen(!open)}>Filter</button></div>: 
            <div className='filter-main' onClick={handleClick}>
                <button name='shirts'>Shirts</button>
                <button name='pants'>Pants</button>
                <button name='shoes'>Shoes</button>
                <button name='t_shirts'>T-shirts</button>
                <button name='caps'>Caps</button>
                <button name='jeans'>Jeans</button>
                <button name='clear'>Clear</button>
            </div>}
    </div>
  )
}

export default Filterpage