import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderBtn({ Text, Img, Link }) {
  return (
    <NavLink to={Link} className={({ isActive }) =>
        `${isActive ? 'after:scale-x-100' : ''} py-[30px]  underline-animation relative gap-1 font-medium text-[16px] flex justify-center items-center`} >
      {Text} 
      {Img && <img src={Img} alt={Text} className="w-5 h-5" />}
    </NavLink>
  );
}

export default HeaderBtn;
