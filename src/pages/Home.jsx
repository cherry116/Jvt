import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Tuned from '../components/Tuned'

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Tuned/>
        <Footer/>
    </div>
  )
}

export default Home