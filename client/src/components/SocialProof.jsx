import React from 'react'
import img0 from '../assets/images/Logo-0.png'
import img1 from '../assets/images/Logo-1.png'
import img2 from '../assets/images/Logo-2.png'
import img3 from '../assets/images/Logo-3.png'
import img4 from '../assets/images/Logo-4.png'

function SocialProof() {
  return (
    <div className='py-[80px] border'>
        <div className='container flex flex-col gap-[24px] w-full items-center'>
            <p className='subtitle'>TRUSTED BY LEADING COMPANIES</p>
            <div className='flex gap-[48px] items-center'>
              <img className='h-[19px]' src={img0} alt="" />
              <img className='h-[32px]' src={img1} alt="" />
              <img className='h-[32px]' src={img2} alt="" />
              <img className='h-[28px]' src={img3} alt="" />
              <img className='h-[35px]' src={img4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SocialProof