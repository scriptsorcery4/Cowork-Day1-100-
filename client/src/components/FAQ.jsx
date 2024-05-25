import React from 'react'
import Accordion from './ui/AccordionCard'

function FAQ() {
  return (
    <div className='py-[112px] border'>
        <div className='container flex justify-between items-start'>
            <div className='flex flex-col gap-[16px]'>
                <p className='subtitle uppercase'>Frequently Asked Questions</p>
                <div className='flex flex-col gap-[24px]'>
                    <h2>Your Roadmap to <br /> Coworking Clarity</h2>
                    <p className='w-[391px] paragraph'>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
                </div>
            </div>
            <div className='w-[49%]'>
                <Accordion/>
            </div>
        </div>
    </div>
  )
}

export default FAQ