import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home';
import CheckOut from './pages/CheckOut';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Card from './pages/Card';
import Success from './pages/Success';
import NavBar from './components/NavBar';
import Cart from './pages/Cart'
import Wishlist from "./pages/Wishlist";
import Payment from './pages/Payment';


const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/checkout" element={<CheckOut />} />
    <Route path="/success" element={<Success />} />
      <Route path="/payment" element={<Payment />} />
            

    </Routes>
    </BrowserRouter>
  );
}

export default App