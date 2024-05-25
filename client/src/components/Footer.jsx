import React from 'react'
import logo from '../assets/images/Heading.png'
import GhostButton from './ui/GhostButton'
import FooterLinks from './ui/FooterLinks'

const gr1 = [
    {title: 'Home'},
    {title: 'About'},
    {title: 'Pricing'},
    {title: 'Blog'},
    {title: 'Events'}
]
const gr2 = [
    {title: 'Subscribe'},
    {title: 'Member Stories'},
    {title: 'Locations'},
    {title: 'Write for Us'}
]
const gr3 = [
    {title: 'Facebook'},
    {title: 'Instagram'},
    {title: 'X'},
    {title: 'LinkedIn'},
    {title: 'Youtube'},
]


function Footer() {
  return (
    <div className='py-[64px] border border-t'>
        <div className='container flex flex-col gap-[32px]'>
            <div className='bg-humble-black text-pure-white rounded-[48px] p-[48px] flex justify-between'>
                <div className='flex flex-col gap-[32px]'>
                    <div className='h-[24px]'><img className='h-full' src={logo} alt="" /></div>
                    <div className='flex flex-col gap-[24px]'>
                        <p className='paragraph'>Join our newsletter to stay up to date on features and releases.</p>
                        <div className='flex gap-[24px]'>
                            <input className='border-pure-white border-b bg-transparent font-GSSemibold tetx-[14px] leading-[150%] p-[12px] w-[359px]' type="text" placeholder='Enter your email' />
                            <GhostButton>Subscribe</GhostButton>
                        </div>
                        <p className='paragraph w-[500px]'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                    </div>
                </div>
                    <div className='w-[49%] flex justify-around'>
                    <FooterLinks title='Explore More' links={gr1}/>
                    <FooterLinks title='Stay Connected' links={gr2}/>
                    <FooterLinks title='Follow Us' links={gr3}/>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <p className='paragraph'>© 2024 Cowork. All rights reserved.</p>
                    <div className='flex gap-[24px] underline accordion'>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies Settings</span>   
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer