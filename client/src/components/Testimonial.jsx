import React from 'react'
import TestimonialCard from './ui/TestimonialCard'
import img1 from '../assets/images/avatar1.png'
import img2 from '../assets/images/avatar2.png'
import img3 from '../assets/images/avatar3.png'
import img4 from '../assets/images/avatar4.png'
import img5 from '../assets/images/avatar5.png'

function Testimonial() {
  return (
    <div className='py-[112px] border'>
        <div className='container flex flex-col gap-[32px]  items-center'>
            <div className='flex flex-col gap-[16px] items-center'>
                <p className='subtitle'>COWORK IN WORDS</p>
                <h2>Hear It from Our Clients</h2>
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex justify-around'>
                    <div className='pt-10'><TestimonialCard img={img1} col='unorganic-green' aut='Liam Brown' des='Software Engineer, TechStartup Innovations' con={`"The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We love the coworking space!"`}  /></div>
                    <TestimonialCard img={img2} col='powerless-grey' aut='Michael Rodriguez' des='Creative Director, DesignCraft Studio'  con={`“The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.”`} />
                    <div className='pt-14'><TestimonialCard img={img3} col='sky-blue' aut='Michael Thompson' des='Graphic Designer, DesignCo'  con={`"As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work."`} /></div>
          
                </div>
                <div className='flex justify-center gap-14'>
                 <TestimonialCard img={img4} col='shiny-pink' aut='David Wilson' des='Project Manager, SoftwareSolutions LLC'  con={`"The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed."`} />
                <div className='pt-8'><TestimonialCard img={img5} col='almost-orange' aut='Alex Nguyen' des='Marketing Consultant, Maverick Marketing'  con={`"The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business."`} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial