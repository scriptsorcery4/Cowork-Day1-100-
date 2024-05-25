import React from 'react'

function StatisticsCard({title, des, col}) {
  return (
    <div className='flex flex-col gap-[10px]'>
        <div className='relative w-fit'>
            <h2>{title}</h2>
            <div className={`absolute z-[-1] bottom-[-3px] right-[30px] w-[36px] h-[36px] 
            ${col==='unorganic-green' && 'bg-unorganic-green'}
            ${col==='sky-blue' && 'bg-sky-blue'}
            ${col==='shiny-pink' && 'bg-shiny-pink'}
            ${col==='almost-orange' && 'bg-almost-orange'}
            rounded-full`}></div>
        </div>
        <p className='paragraph' >{des}</p>
    </div>
  )
}

export default StatisticsCard