import React from "react";
import Arrow from '../../assets/HomePage/Arrow.jsx'


const ServicesBtns=[
    {
        Number:'01',
        Heading:'Responsive Design',
        Description:'Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.',
    },
    {
        Number:'02',
        Heading:'Web Designing',
        Description:'Design websites that adapt seamlessly to any device, ensuring a flawless experience across all screen sizes.',
    },
    {
        Number:'03',
        Heading:'Web Development',
        Description:'Develop attractive websites using the latest technologies, ensuring high performance, security, and a seamless user experience.',
    },
    {
        Number:'04',
        Heading:'Website Redesign',
        Description:'Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.',
    },
]

function MyServices() {
  return (
    <>
      <div className="bg-black font-sora flex flex-col items-center p-24 w-full gap-14">
        
        <div className="flex flex-col items-center gap-4">
          <h1
            className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
            style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
          >
          My Quality Services{" "}
          </h1>
          <p
                style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
                className=" text-center text-[#dddddd] font-light max-w-[700px]"
              >
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </p>
        </div>

        <div className="flex flex-col w-full ">

        {ServicesBtns.map((data,index)=>(
                <a href="" key={index} className="Service-Btn flex justify-between items-center p-7 w-full border-y border-[#2a1454] group">
                        <span className="font-bold text-[#8750f7] group-hover:text-white flex items-center" style={{ fontSize: "clamp(16px, 5vw, 20px)" }}>{data.Number} &nbsp;&nbsp; <span className="text-white" style={{ fontSize: "clamp(20px, 5vw, 30px)" }}>{data.Heading}</span>
                        </span>

                    <div className="flex gap-28">
                        <p className="max-w-[560px]  group-hover:text-[#dddddd]" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>
                              {data.Description}
                           </p>

                           <button className="group-hover:-rotate-[220deg]  group-hover:text-[white] -rotate-[125deg] text-[#8750f7] transition-all duration-500 "> <Arrow className='w-7 h-7 ' /> </button>
                           </div>
                </a>
        ))}
        </div>


      </div>
    </>
  );
}

export default MyServices;
{/* <img src={Arrow} alt="" className="w-7 h-7 " /> */}