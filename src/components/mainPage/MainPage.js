import React from 'react'
import { Route, Routes } from 'react-router'

import Navbar from '../navbar/Navbar'
import MainFooter from '../footer/MainFooter'
import ScrollButton from '../scrollButton/ScrollButton'
import ProductGrill from '../products/productGrill/ProductGrill'
import ProductTortilla from '../products/productTortilla/ProductTortilla'
import ProductFries from '../products/productFries/ProductFries'
import ProductSandwich from '../products/productSandwich/ProductSandwich'
import ProductSpecialties from '../products/productSpecialties/ProductSpecialties'
import PriceList from '../priceList/PriceList'
import Delivery from '../delivery/Delivery'
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home'

const MainPage = () => {
  return (
    <div className='mainPage'>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='*' element={ <Home />} />
          <Route path='/grill' element={ <ProductGrill /> } />
          <Route path='/tortilla' element={ <ProductTortilla /> } />
          <Route path='/fires' element={ <ProductFries /> } />
          <Route path='/sandwich' element={ <ProductSandwich /> } />
          <Route path='/specialties' element={ <ProductSpecialties /> } />
          <Route path='/pricelist' element={ <PriceList /> } />
          <Route path='/delivery' element={ <Delivery /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
        <MainFooter />
        <ScrollButton />
    </div>
  )
}

export default MainPage