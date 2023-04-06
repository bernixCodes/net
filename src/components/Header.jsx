import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function Header() {
  const [isClicked, setClicked] = useState(false);

  return (
    <nav className="w-full py-1 z-50 rounded-full px-8 bg-white shadow-md md:shadow-xl flex justify-between items-center fixed top-8">
      <Image
        src={logo}
        alt="netLfye"
        className=" w-[85px] h-[45px] md:w-[108px] md:h-[52px] object-cover"
      />
      <ul className="hidden md:flex gap-8 justify-end items-center flex-1">
        <li>
          <a href={`#home`}>Home</a>
        </li>
        <li>
          <a href={`#about`}>About</a>
        </li>
        <li>
          <a href={`#download`}>Download</a>
        </li>
        <li>
          <a href={`#contact`}>Contact</a>
        </li>
      </ul>
      <div className="flex md:hidden" onClick={() => setClicked(!isClicked)}>
        <HiOutlineMenuAlt3 fontSize={"20px"} />
      </div>

      {isClicked && (
        <div className="absolute md:hidden top-16  right-5 p-5 bg-white h-screen w-5/12 z-50">
          <ul className=" p-5 ">
            <li className="py-5">
              <a href={`#home`}>Home</a>
            </li>
            <li className="py-5">
              <a href={`#about`}>About</a>
            </li>
            <li className="py-5">
              <a href={`#download`}>Download</a>
            </li>
            <li className="py-5">
              <a href={`#contact`}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
