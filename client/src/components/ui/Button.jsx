import React from 'react'

function Button({children}) {
  return (
    <button className='text-pure-white bg-humble-black border border-humble-black px-[24px] py-[12px] rounded-[42px] paragraph-strong w-fit hover:bg-gray-100 hover:text-humble-black transition-colors cur '>{children}</button>
  )
}

export default Button