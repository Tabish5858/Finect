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
      <div className='bg-background-gradientSecondary'>
        <AlphaStats />
        <TalksStats />
        <div className='bg-[#2a30a0]'>
          <ProductStats />
        </div>
        <div className='bg-[#2a2f85]'>
          <ETFStats />
        </div>
      </div>
    </div>
  )
}

export default Home
