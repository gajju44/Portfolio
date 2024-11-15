import React from 'react'

function SecondaryBtn({children,className }) {
  return (
   <>
    <button className={`${className} flex  justify-center items-center gap-2 transition-colors duration-500 text-[#8750f7] border border-[#8750f7] rounded-[50px] font-medium text-[15px] leading-none py-[17px]  px-[35px] h-fit w-fit hover:bg-[#8750f7] hover:text-white`}> <span className='background'></span> {children}</button>
   </>
  )
}

export default SecondaryBtn
