import React from 'react';
import SecondaryBtn from '../../Components/SharedComponent/Buttons/SecondaryBtn';
import DownloadLogo from '../../assets/HomePage/Download.svg';

function Introduction() {
  return (
   <>
   <div className='flex flex-col items-center'>

<div className='flex flex-row'>

{/* {from here to */}
<div className='flex flex-col w-[37vw]'>

<div>
    <h3 className='font-bold'  style={{ fontSize: "clamp(20px, 5vw, 36px)" }}>I am Gajendra</h3>
</div>

<div>
<h1 className="font-bold md:text-left text-center Hero-Title" style={{ fontSize: "clamp(30px, 5vw, 64px)" }}>
Web Developer + UX Designer </h1>

</div>

<div>
    <p style={{ fontSize: "clamp(20px, 5vw, 20px)" }} >I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
</div>

<div>
<SecondaryBtn Text={  <> {'Download CV'} <img src={DownloadLogo} className='w-[18px] h-[16px]' alt="Download logo" /></>} />
</div>

</div>
{/* to here is intro text and btn */}


<div></div>

</div>


<div></div>

   </div>
   </>
  )
}

export default Introduction
