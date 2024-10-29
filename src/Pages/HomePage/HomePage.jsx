import React from 'react';
import Navbar from './Navbar.jsx';
import Introduction from './Introduction.jsx';

function HomePage() {
  return (
   <>
   <div className='flex flex-col justify-center font-sora'>
   <Navbar/>
   <Introduction/>
   </div>
   </>
  )
}

export default HomePage
