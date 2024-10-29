import React from 'react';
import HeaderBtn from './HeaderBtn';
import PrimaryBtn from '../../Components/SharedComponent/PrimaryBtn';
import PlusIco from '../../assets/HomePage/plusIcon.svg';
import LightLogo from '../../assets/HomePage/DarkLogo.svg';
import DarkLogo from '../../assets/HomePage/LightLogo.svg';


const HeaderBtnContent=[
{
    text:'Home ',
    img:PlusIco,
},
{
    text:'About',
    img:'',
},
{
    text:'Services',
    img:'',
},
{
    text:'Portfolios',
    img:'',
},
{
    text:'Blog ',
    img:PlusIco,
},
{
    text:'Contact',
    img:'',
},

];


function Navbar() {
  return (
    <>
    
    <div className='flex gap-4  justify-center items-center w-full fixed py-5 top-0 '>
        <div className='mx-auto justify-between items-center min-w-[1320px] flex'>
        <div className='flex  px-3 items-center gap-5'>
                <img src={DarkLogo} alt="Logo" className='h-14 w-14' />
                <p className='font-medium'>gajendra.connect@gmail.com</p>
        </div>

        <div className='flex gap-10 items-center'>
            {HeaderBtnContent.map((data,index)=>(
               <HeaderBtn key={index} Img={data.img} Text={data.text}/> ) )}
               <PrimaryBtn Text={'Hire Me!'} />
        </div>
        
        </div>
    </div>
    
    </>
  )
}

export default Navbar
