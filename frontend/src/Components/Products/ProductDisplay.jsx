import React, { useEffect, useCallback } from 'react';
import ProductItem from './ProductItem';
import './Products.css';
import { useDispatch,useSelector } from 'react-redux';
import {fetchProducts, getProducts} from '../../ReduxStore/features/Products/productSlice';
import Filterpage from './Filterpage';


const ProductDisplay = () => {
  const dispatch=useDispatch();
  const {storeProducts, loading, error} = useSelector(
    state => state.products
  );
  const filterData = useSelector(state => state.filter.filterData);

  const fetchProductsHandler = useCallback(() => {
    
    if (filterData === "All") {
      dispatch(fetchProducts());
    } else {
      dispatch(getProducts(filterData));
    }
  }, [dispatch, filterData]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);


  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Filterpage />
      {
        storeProducts.length > 0 ? (
          <div>
            <div className='product-display' id='product-display'>
              <div className="product-display-list">
                {storeProducts.map((item) => {
                  return <ProductItem key={item.id} item={item} />
                })}
              </div>
            </div>
          </div>
        ) : <p>Loading.....</p>
      }
    </div>
  );
}

export default React.memo(ProductDisplay);
