import React from 'react'
import img from '../assets/images/blog.png'
import GhostButton from './ui/GhostButton'
import BlogCard from './ui/BlogCard'
import img1 from '../assets/images/blog1.png'
import img2 from '../assets/images/blog2.png'
import img3 from '../assets/images/blog3.png'

function Blog() {
  return (
    <div className='py-[112px] border'>
        <div className='container flex flex-col gap-[80px] items-center'>
            <div className='flex flex-col gap-[16px] items-center'>
                <p className='subtitle'>COWORK CHRONICLES</p>
                <div className='flex flex-col gap-1'>
                    <h2>Insights, Innovation, and </h2>
                    <div className='flex gap-[12px] justify-center items-center'>
                        <img className='h-[58px]' src={img} alt="" />
                        <h2>Inspiration</h2>
                    </div>
                </div>
                <p className='paragraph text-center w-[520px]'>Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork experience.</p>
            </div>
            <div className='flex flex-col gap-[64px] items-center'>
                <div className='grid grid-cols-3 gap-[32px]'>
                    <BlogCard img={img1} sub='Trending' col='sky-blue' min='7' title='Navigating the Future: Trends in Modern Coworking Spaces' />
                    <BlogCard img={img2} sub='Productivity' col='shiny-pink' min='5' title="Mastering Productivity: Tips from Cowork's High Achiever" />
                    <BlogCard img={img3} sub='Talk' col='unorganic-green' min='10' title="Tech Talk: The Backbone of Cowork's Seamless Experience" />
                </div>
                <GhostButton>View All</GhostButton>
            </div>
        </div>
    </div>
  )
}

export default Blog