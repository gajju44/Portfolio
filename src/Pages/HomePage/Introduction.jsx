import React from "react";
import SecondaryBtn from "../../Components/SharedComponent/Buttons/SecondaryBtn";
import DownloadLogo from "../../assets/HomePage/DownloadLogo.jsx";
import Gajju from "../../assets/HomePage/unnamed.webp";
import { Download, Twitter, Instagram, Linkedin, Github } from "lucide-react";

function Introduction() {
  return (
    <>
      <div className="relative flex flex-col items-start  w-full  xl:max-w-[1320px] 2xl:max-w-[1400px]  mx-auto ">
      <svg viewBox="0 0 1320 300">
        <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
          HI        </text>
      </svg>
      <div className="blur"/>
        <div className="flex gap-52 w-full flex-row">
          {/* {from here to */}
          <div className="flex  gap-3 py-6 flex-col w-[37vw]">
            <div>
              <h3
                className="font-bold "
                style={{ fontSize: "clamp(20px, 5vw, 36px)" }}
              >
                I am Gajendra
              </h3>
            </div>

            <div>
              <h1
                className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
                style={{ fontSize: "clamp(30px, 5vw, 69px)" }}
              >
                Web Developer + UX Designer{" "}
              </h1>
            </div>

            <div>
              <p
                style={{ fontSize: "clamp(20px, 5vw, 21px)" }}
                className="max-w-[550px] text-[#dddddd] font-light"
              >
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect Numbers of people
              </p>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <SecondaryBtn className={"!items-start text-[17px] font-normal !leading-[21px]"}>
                {" "}
                {"Download CV"} <DownloadLogo height={18} width={18} />
              </SecondaryBtn>
              <SecondaryBtn className="w-fit  rounded-full !py-2 !px-2 h-fit">
                <Instagram size={20} />
              </SecondaryBtn>
              <SecondaryBtn className="w-fit  rounded-full !py-2 !px-2 h-fit">
                <Github size={20} />
              </SecondaryBtn>
              <SecondaryBtn className="w-fit  rounded-full !py-2 !px-2 h-fit">
                <Linkedin size={20} />
              </SecondaryBtn>
            </div>
          </div>
          {/* to here is intro text and btn */}
          <div className="blur !bottom-0 !top-auto left-[55%] !w-[220px] !h-[220px]"/>
          <div className="relative">
            <img
              src={Gajju}
              alt="Profile"
              className="img-blur mt-4 w-[472px] h-[506px] duration-300 transition-all rounded-[40px] rotate-[4deg] border-[2px] hover:rotate-0 hover:border-[#8750f7] border-[#2a1454]"
            />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Introduction;
