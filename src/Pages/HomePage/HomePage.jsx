import React from 'react';
import Navbar from '../../Components/SharedComponent/Navbar.jsx';
import Introduction from './Introduction.jsx';

function HomePage() {
  return (
   <>
   <div className='flex flex-col items-center gap-20 w-full font-sora'>
   <Navbar/>
   <Introduction/>
   <Introduction/>
   <Introduction/>
   <Introduction/>
   <Introduction/>
   <Introduction/>
   </div>
   </>
  )
}

export default HomePage
