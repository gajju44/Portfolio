import React from 'react';
import HeaderBtn from './HeaderBtn';
import PrimaryBtn from './Buttons/PrimaryBtn';
import LightLogo from '../../assets/HomePage/DarkLogo.svg';
import DarkLogo from '../../assets/HomePage/LightLogo.svg';
import NavLinks from '../SharedComponent/NavLinks.js'




function Navbar() {
  return (
    <>
    
    <div className='flex gap-4  justify-center items-center right-0 top-0 z-50 w-full sticky py-8  '>

        <div className='mx-auto  items-center gap-64 w-full xl:max-w-[1320px] 2xl:max-w-[1480px] flex'>
        <div className='flex  px-3 items-center gap-8 '>

                <a href="" className='cursor-pointer'>
                <img src={DarkLogo} alt="Logo" className='h-14 w-14' />
                </a>

                <a className='font-medium text-[17px] cursor-pointer hover:text-[#8750f7]' href=''>gajendra.connect@gmail.com</a>
        </div>

        <div className='flex gap-10 items-center'>
            {NavLinks.map((data,index)=>(
               <HeaderBtn key={index} Img={data.img} Link={data.Link}  Text={data.text}/> ) )}
               <PrimaryBtn Text={'Hire Me!'} />
        </div>
        
        </div>
    </div>
    
    </>
  )
}

export default Navbar
