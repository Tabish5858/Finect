import React from 'react'
import TalksStats from '../components/sections/TalksStats'
import AlphaStats from '../components/sections/AlphaStats'
import FinancialAdvice from '../components/sections/FinancialAdvice'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import VideoStats from '../components/sections/VideoStats'
import ProductStats from '../components/sections/ProductStats'
import ETFStats from '../components/sections/ETFStats'

const Home: React.FC = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='bg-background-gradientMain'>
        <Hero />
        <Stats />
        <FinancialAdvice />
        <VideoStats />
      </div>
      <AlphaStats />
      <div className='relative bg-gradient-to-b from-[#4c53d100] via-[#4C53D1] via-[-100%] via-[#2A30A8] via-[28.5%] to-[#2A2D67]'>
        <TalksStats />
        <ProductStats />
        <ETFStats />
      </div>
    </div>
  )
}

export default Home
