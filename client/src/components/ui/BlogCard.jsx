import React from 'react'
import arr from '../../assets/images/arr.png'

function BlogCard({img, sub, col, min, title}) {
  return (
    <div className='w-full flex flex-col gap-[24px]'>
        <img src={img} alt="" />
        <div className='flex flex-col gap-[16px]'>
            <div className='flex gap-[16px] items-center'>
                <div className={`px-[8px] py-[4px] 
                ${col==='unorganic-green' && 'bg-unorganic-green'}
                ${col==='sky-blue' && 'bg-sky-blue'}
                ${col==='shiny-pink' && 'bg-shiny-pink'}
                ${col==='almost-orange' && 'bg-almost-orange'}
                flex justify-center items-center rounded-[4px]`}>
                    <p className=' font-GSSemibold text-[14px] leading-[150%]'>{sub}</p>
            </div>
                <p className='paragraph'>{min} min read</p>
            </div>
            <h3>{title}</h3>
        </div>
        <div className='flex gap-[8px] items-center'>
            <p className='GSRegular text-[14px] leading-[150%]'>Read more</p>
            <img className='h-[24px]' src={arr} alt="" />
        </div>
    </div>
  )
}

export default BlogCard