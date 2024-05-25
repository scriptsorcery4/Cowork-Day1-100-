import React from 'react'
import StatisticsCard from './ui/StatisticsCard'
import img from '../assets/images/st.png'

function Statistics() {
  return (
    <div className='py-[112px] border'>
        <div className='container flex justify-between items-center'>
            <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col gap-[16px]'>
                    <p className='subtitle'>COWORK IN NUMBERS</p>
                    <h2>Transformative Statistics <br /> That Speak Volumes</h2>
                </div>
                <div className='grid grid-cols-2 gap-[30px]'>
                    <StatisticsCard col='unorganic-green' title='240%' des='Community Growth'  />
                    <StatisticsCard col='sky-blue' title='99%' des='Technology Uptime' />
                    <StatisticsCard col='shiny-pink' title='50+' des='Happy Members' />
                    <StatisticsCard col='almost-orange' title='100%' des='Renewable Energy Sources' />
                </div>
            </div>
            <div className='w-[49%]'>
                <img className='w-full' src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Statistics