import React from 'react'

function TestimonialCard({img, con, aut, des, col}) {
  return (
    <div className={`p-[32px] rounded-[24px] flex flex-col gap-[24px] items-center w-[360px] h-fit
    ${col==='unorganic-green' && 'bg-unorganic-green'}
    ${col==='powerless-grey' && 'bg-powerless-grey'}
    ${col==='sky-blue' && 'bg-sky-blue'}
    ${col==='shiny-pink' && 'bg-shiny-pink'}
    ${col==='almost-orange' && 'bg-almost-orange'}
    `}>
        <img className='h-[56px]' src={img} alt="" />
        <p className='paragraph'>{con}</p>
        <div className='flex flex-col items-center'>
            <p className='font-GSSemibold text-[12px] leading-[150%]'>{aut}</p>
            <p className='paragraph'>{des}</p>
        </div>
    </div>
  )
}

export default TestimonialCard