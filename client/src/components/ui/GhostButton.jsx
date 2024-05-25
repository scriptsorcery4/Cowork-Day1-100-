import React from 'react'

function GhostButton({children}) {
  return (
    <button className='text-humble-black w-fit bg-pure-white border border-humble-black px-[24px] py-[12px] rounded-[42px] paragraph-strong hover:bg-gray-100 transition-colors'>{children}</button>
  )
}

export default GhostButton