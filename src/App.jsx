import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar1 from './comp/Navbar1'
import Carousel1 from './comp/Carousel'
import Card1 from './comp/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './page/wishlist'
import Home from './page/home'
import Wishlist from './page/wishlist'
import Cart from './page/shoppingcart'
import Checkout from './page/checkout'
import Search from './comp/searchbar'
import Bcaproduct from './page/bcaproduct'
import Footer1 from './comp/Footer'
import Philosophy from './page/PhiloProduct'

import Zoology from './page/ZoologyProduct'
import Psychology from './page/PsyProduct'
import Chemistry from './page/ChemistryProduct'
import History from './page/HistroryProducts'
import English from './page/EnglishProducts'
import First from './bcaprodpages/first'
import MusicProduct from './page/MusicProduct'
import { CartProvider, useCart } from "react-use-cart";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <body class="2h-screen bg-white" >
    <div className=" bg-cover">
   <BrowserRouter>
   <Navbar1></Navbar1>
   <Search></Search>
  
   <Routes>
    <Route path="/" element={<Home/>}> </Route>

   
    <Route path="/wishlist" element={<Wishlist/>}></Route>

    <Route path="/shoppingcart" element={<CartProvider><Cart/></CartProvider>}></Route>

    
    <Route path="/checkout" element={<Checkout/>}></Route>

    <Route path="/bcaproduct" element={<CartProvider>
      <Bcaproduct/>
    </CartProvider>}></Route>
    <Route path="/musicproduct" element={<CartProvider>
      <MusicProduct/>
    </CartProvider>}></Route>

    <Route path="/philosophy" element={<CartProvider><Philosophy/></CartProvider>}></Route>

    ]

    <Route path="/zoology" element={<CartProvider><Zoology/></CartProvider>}></Route>

    <Route path="/psychology" element={<CartProvider><Psychology/></CartProvider>}></Route>

    <Route path="/chemistry" element={<CartProvider><Chemistry/></CartProvider>}></Route>

    <Route path="/history" element={<CartProvider><History/></CartProvider>}></Route>

    <Route path="/english" element={<CartProvider><English/></CartProvider>}></Route>

    <Route path="/first" element={<First/>}></Route>
   </Routes>
   <Footer1></Footer1>
   </BrowserRouter>

   </div>
   </body>
   </>
  )
}

export default App
