import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home.jsx'
import Cart from './pages/Cart/cart.jsx'
import PlaceOrder from './pages/Place-Order/placeOrder.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
   <>
    {showLogin?<LoginPopup  setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
    </div>
    <Footer/> 
   </>
  )
}

export default App
