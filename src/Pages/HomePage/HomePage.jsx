import React from 'react';
import Navbar from '../../Components/SharedComponent/Navbar.jsx';
import Introduction from './Introduction.jsx';

function HomePage() {
  return (
   <>
   <div className='flex flex-col items-center gap-20 w-full h-screen font-sora'>
   <Navbar/>
   <Introduction/>
  
   </div>
   </>
  )
}

export default HomePage
