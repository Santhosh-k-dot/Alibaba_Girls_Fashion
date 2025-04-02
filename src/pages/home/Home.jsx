import React from 'react'
import Baneer from './Baneer'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'


const Home = () => {
    return (
        <>
            <Baneer />
            <Categories />
            <HeroSection />
            <TrendingProducts />
            <DealsSection />
            <PromoBanner />
            <Blogs />
        </>
    )
}

export default Home