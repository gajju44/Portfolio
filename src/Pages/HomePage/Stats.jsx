import React from 'react'

function Stats() {

const Stats=[
  {
    Number:'3+',
    Text:'Years of Experience',

  },
  {
    Number:'5+',
    Text:'Project Completed',

  },
  {
    Number:'4+',
    Text:'Happy Clients',

  },
  {
    Number:'3+',
    Text:'Client Companies',

  },

]

  return (
  <>
  <div className='flex flex-wrap  font-sora w-full justify-evenly py-10'>

  {Stats.map((data,index)=>(
    <span key={index} className=' font-medium flex items-center text-[#dddddd]' style={{ fontSize: "clamp(30px, 5vw, 72px)" }}> {data.Number}<span className='text-lg  w-24 inline-block ml-4' style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}> {data.Text}</span></span>
) )}
  </div>
  </>
  )
}

export default Stats
