import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Order from "./pages/Order"
import Contact from "./pages/Contact"

import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path = "/home" element= {<Home />}/>
          <Route path = "/about" element={<About />}/>
          <Route path = "/order" element={<Order />}/>
          <Route path = "/contact" element={<Contact />}/>
        </Routes>
      </div>
    </>
  )
}

export default App