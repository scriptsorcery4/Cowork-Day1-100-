import React from 'react'

function FooterLinks({title, links}) {
  return (
    <div className='flex flex-col gap-[16px]'>
        <p className='subtitle uppercase'>{title}</p>
        <div className='flex flex-col'>
            {links.map(link=>(
                <p className='py-[4px] paragrap text-gray-200'>{link.title}</p>
            ))}
        </div>
    </div>
  )
}

export default FooterLinks