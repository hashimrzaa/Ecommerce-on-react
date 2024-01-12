import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../Screen/Home/Home'
import Product from '../Screen/Product/Product.jsx'
import Singleproduct from '../Screen/singleproduct.jsx/Singleproduct'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='product/singleProduct/:id' element={<Singleproduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router