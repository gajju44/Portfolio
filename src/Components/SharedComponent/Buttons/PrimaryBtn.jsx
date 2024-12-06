import React from 'react'

function PrimaryBtn({Text}) {
  return (
    <>
    <button className='PrimaryBtnGredient transition-all duration-500 font-bold text-[16px] py-[13.25px] px-[35px] rounded-[50px]  h-fit w-fit'>{Text}</button>
    </>
  )
}

export default PrimaryBtn
