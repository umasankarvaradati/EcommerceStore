import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Home/Navbar';
import PlaceOrder from './Components/DeliveryInfo/PlaceOrder';
import AboutUs from './Components/AboutUs/AboutUs';
import Contactus from './Components/ContactUs/Contactus';
import ProductDetail from './Components/ProductDetails/ProductDetail';
import ProductDisplay from './Components/Products/ProductDisplay';
import AddProducts from './Dummy/PostProducts/AddProducts';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<ProductDisplay />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PlaceOrder />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/dummyadd" element={<AddProducts />} />
          </Routes>
        </div>
      
    </Router>
  )
}

export default App
