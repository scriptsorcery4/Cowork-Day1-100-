import React from 'react'
import Button from './ui/Button'
import Img from '../assets/images/hero.png' 
import Green from '../assets/images/green.png'

function Hero() {
  return (
    <div className='h-[110vh] flex items-center border'>
        <div className='container flex justify-between items-center'>
            <div className='flex flex-col gap-[32px]'>
                <div className='relative'>
                    <h1>Elevate Your <br /> Workspace <br /> with Cowork </h1>
                    <img className='absolute bottom-[-20px] right-[20px] z-[-1]' src={Green} alt="" />
                </div>
                <p>Welcome to Cowork - where innovation meets collaboration in the heart of <br /> producivity! Unleash 🚀 your potential in our thoughtfully desinged <br />coworkking spaces, tailored to inspire creativity and foster connections.</p>
                <Button>Claim Your Spot</Button>
            </div>
            <div className='w-[48%]'>
                <img className='w-full' src={Img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero