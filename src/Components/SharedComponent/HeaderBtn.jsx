import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


// const [showMenuOptions, setShowMenuOptions] = useState(false);
// const changesMenuState = useCallback(() => {
//   setShowMenuOptions((prevState) => !prevState);
// }, []);


function HeaderBtn({ Text, Img, Link }) {

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
    {/* <div className='flex flex-col relative items-center' 
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      > */}

    
    <NavLink to={Link} className={({ isActive }) =>
        `${isActive ? 'after:scale-x-100' : ''} py-[30px]  underline-animation relative gap-1 font-medium text-[16px] flex justify-center items-center`} >
      {Text} 
      {/* {Img && <img src={Img} alt={Text} className="w-5 h-5" />} */}
    </NavLink>

    {/* {DropDown && isDropdownOpen && (
        <div className="absolute top-[90%] w-fit whitespace-nowrap gap-[0.5px] shadow-2xl shadow-[#8850f737] bg-black flex flex-col ">
          {DropDown.map((item, index) => (
            <NavLink
              key={index}
              to={item.Link}
              className={`py-4 px-4 pr-16 text-[16px] hover:text-[#8750f7]  font-semibold ${index === DropDown.length - 1 ? '' : 'border-b-[0.5px] border-[#2a1454]'}`}
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      )} */}

    {/* </div> */}
    </>
  );
}

export default HeaderBtn;
