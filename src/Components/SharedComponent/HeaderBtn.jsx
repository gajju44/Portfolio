import React from 'react';

function HeaderBtn({ Text, Img }) {
  return (
    <a href="#" className="py-[30px] underline-animation relative gap-1 font-medium text-[16px] flex justify-center items-center">
      {Text} 
      {Img && <img src={Img} alt={Text} className="w-5 h-5" />}
    </a>
  );
}

export default HeaderBtn;
