import React from 'react'
import GhostButton from './ui/GhostButton'
import img from '../assets/images/Rectangle2.png'
import vt from '../assets/images/vt.png'
import Play from '../assets/images/Play.png'

function VirtualTour() {
  return (
    <div className='py-[112px] border'>
        <div className='container flex flex-col gap-[80px]'>
            <div className='flex flex-col gap-[24px] items-center'>
                <div className='flex flex-col gap-[16px] items-center w-[768px]'>
                    <p className='subtitle'>A VIRTUAL TOUR</p>
                    <h2>Explore Cowork Through Our</h2>
                    <div className='flex gap-[12px] items-center'>
                        <img className='h-[58px]' src={img} alt="" />
                        <h2>Lens</h2>
                    </div>
                    <p className='paragraph'>Experience the essence of Cowork before setting foot in our dynamic spaces. Our immersive video tour gives you a sneak peek into the vibrant atmosphere, cutting-edge facilities, and collaborative energy that define the Cowork experience.</p>
                </div>
                <GhostButton>Explore Spaces</GhostButton>
            </div>
            <iframe
        
        height="700"
        src="https://www.youtube.com/embed/giQBy1EUwbI?si=dsE7L6BhCSwlIC1i"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
    </div>
  )
}

export default VirtualTour