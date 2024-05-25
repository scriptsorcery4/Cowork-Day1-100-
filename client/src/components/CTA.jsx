import React from 'react'
import Button from './ui/Button'
import img from '../assets/images/cta.png'

function CTA() {
  return (
    <div className='py-[112px] border'>
        <div className='container flex flex-col gap-[24px] items-center'>
            <div className='flex flex-col gap-[24px]'>
                <div className='flex gap-[24px] items-center'>
                    <h1>Seize</h1>
                    <img className='h-[96px]' src={img} alt="" />
                    <h1>The Moment - </h1>
                </div>
                <h1 className='text-center'>Join Cowork Today!</h1>
            </div>
            <p className='w-[639px] paragraph text-center'>Uncover the transformative power of Cowork as echoed by those who've made it their professional haven. This is more than finding a desk; it's discovering a community that fuels your journey to success.</p>
            <Button>Claim Your Spot</Button>
        </div>
    </div>
  )
}

export default CTA