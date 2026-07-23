import React from 'react'
import Hero from "../components/Hero";
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories'

 
const Home = () => {
  return (
    <>
    <Hero />
    <Categories/>
     <FeaturedProducts />
    </>
  )
}

export default Home