import React from 'react'
import img from '../assets/images/Rectangle1.png'
import FeatureCard from './ui/FeatureCard'
import img1 from '../assets/images/Planet.png'
import img2 from '../assets/images/CreditCard.png'
import img3 from '../assets/images/UserList.png'

function Features() {
  return (
    <div className='py-[112px] border'>
        <div className='container flex flex-col gap-[80px] items-center'>
            <div className='flex gap-[16px]'>
                <h2>Why Choose</h2>
                <img src={img} alt="" />
                <h2>Cowork?</h2>
            </div>
            <div className='flex gap-[48px] items-center justify-between'>
                <FeatureCard col='unorganic-green' img={img1} title='Flexibe Spaces' des="Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs."/>
                <FeatureCard col='sky-blue' img={img2} title='Transparent Pricing' des="Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank."/>
                <FeatureCard col='shiny-pink' img={img3} title='Tailored Memberships' des="Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style."/>
            </div>
        </div>
    </div>
  )
}

export default Features