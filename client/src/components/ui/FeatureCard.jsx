import React from 'react'

function FeatureCard({img, title, des, col}) {
  return (
    <div className='flex flex-col gap-[24px] items-center'>
        <div className='relative '>
            <img className='h-[48px]' src={img} alt="" />
            <div className={`absolute z-[-1] bottom-0 right-0 h-[36px] w-[36px] rounded-full 
            ${col === 'unorganic-green' && 'bg-unorganic-green'}
            ${col === 'sky-blue' && 'bg-sky-blue'}
            ${col === 'shiny-pink' && 'bg-shiny-pink'}
           `}></div>    
        </div>
        <h3>{title}</h3>
        <p className='paragraph text-center'>{des}</p>
    </div>
  )
}

export default FeatureCard