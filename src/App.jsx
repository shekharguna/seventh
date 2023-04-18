import { useState } from 'react'

import './App.css'
import Navbar1 from './comp/Navbar1'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './page/home'

import Cart from './page/shoppingcart'

import Search from './comp/searchbar'
import Bcaproduct from './page/bcaproduct'
import Footer1 from './comp/Footer'
import Philosophy from './page/PhiloProduct'

import Zoology from './page/ZoologyProduct'
import Psychology from './page/PsyProduct'
import Chemistry from './page/ChemistryProduct'
import History from './page/HistroryProducts'
import English from './page/EnglishProducts'

import MusicProduct from './page/MusicProduct'
import TshirtProduct from './page/tshirtproduct'
import CaseProduct from './page/phonecaseproduct'
import HoodieProduct from './page/hoodieproduct'
import { CartProvider, useCart } from "react-use-cart";
import About1 from './page/aboutus'


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

   


    <Route path="/shoppingcart" element={<CartProvider><Cart/></CartProvider>}></Route>

    
    

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

    <Route path="/tshirtprod" element={<CartProvider><TshirtProduct/></CartProvider>}></Route>

    <Route path="/caseprod" element={<CartProvider><CaseProduct/></CartProvider>}></Route>

    <Route path="/hoodieprod" element={<CartProvider><HoodieProduct/></CartProvider>}></Route>

   

    <Route path="/about1" element={<About1/>}></Route>
   </Routes>
   <Footer1></Footer1>
   </BrowserRouter>

   </div>
   </body>
   </>
  )
}

export default App
