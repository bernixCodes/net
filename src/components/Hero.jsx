import Image from "next/image";
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="home"
      className=" pt-[120px] md:pt-[180px]  bg-gradient-to-r from-emerald-100 via-white-300 to-gray-100 "
    >
      <div className="flex flex-col md:flex-row items-center md:gap-20 xl:gap-28  justify-between w-[95%] md:w-[80%] mx-auto">
        <div className="md:max-w-[50%]">
          <h1 className=" font-medium md:font-semibold text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] text-[#2c2125]">
            <span className="tracking-wider ">
              {" "}
              <span className="text-[#2B8950]">Net</span>
              <span className="text-[#A69B9A]">Lyfe</span>
            </span>
            , your health partner!
          </h1>
          <p className="mt-[30px] text-[20px]">
            A health platform that provides educative content and medical
            assistance to patients with Diabetes, Malaria, Pneumonia and Blood
            Pressure(BP) diseases to help in the reduction of mortality rate and
            ease the government’s burden on developmental problems in Ghana.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-7 mt-[15px] mb-5 ">
            <Link href={"/login"}>
              <button className="text-[#2B8950] font-semibold bg-white rounded-full w-[120px] py-2 shadow-md">
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="text-white font-semibold bg-[#2B8950] rounded-full w-[120px] py-2 shadow-md">
                Signup
              </button>
            </Link>
          </div>
        </div>
        <div className="md:max-w-[50%] w-full  bg-gradient-to-t from-gray-200  via-white to-gray-100 md:from-transparent ">
          <img
            src={"/header-section-img.png"}
            width={"400px"}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
