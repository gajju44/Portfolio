import React from 'react';
import Navbar from '../../Components/SharedComponent/Navbar.jsx';
import Introduction from './Introduction.jsx';
import Stats from './Stats.jsx';
function HomePage() {
  return (
   <>
   <div className='flex flex-col items-center gap-20 w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>
   <Navbar/>
   <Introduction/>
    <Stats/>
  
   </div>
   </>
  )
}

export default HomePage
