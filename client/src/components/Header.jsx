import React from 'react'
import Logo from '../assets/images/Logo.png'
import Button from './ui/Button'
import GhostButton from './ui/GhostButton'

function Header() {
  return (
    <div className='h-[72px] flex items-center shadow-sm'>
        <div className='container flex justify-between items-center'>
            <div className='h-[24px]'><img className='h-full' src={Logo} alt="" /></div>
            <div className='flex gap-[48px]'>
                <ul className='flex gap-[48px] items-center paragraph text-humble-black'>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Events</li>
                </ul>
                <div className='flex gap-[10px]'>
                    <GhostButton>Log In</GhostButton>
                    <Button>Sing Up</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header