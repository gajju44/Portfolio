import React from 'react'

function SecondaryBtn({Text}) {
  return (
   <>
    <button className='flex my-element justify-center items-center gap-1 text-[#8750f7] border border-[#8750f7] rounded-[50px] font-medium text-[15px] leading-none py-[17px]  px-[35px] h-fit w-fit'>{Text}</button>
   </>
  )
}

export default SecondaryBtn
