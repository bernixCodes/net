import Image from "next/image";
import React from "react";

function About() {
  return (
    <section id="about" className="pt-[30px]">
      <div className="flex flex-col-reverse md:flex-row  md:gap-20 xl:gap-28  justify-between w-[95%] md:w-[80%] mx-auto">
        <div className="md:max-w-[50%] w-full  bg-gradient-to-t from-gray-200  via-white to-gray-100 md:from-transparent ">
          <img src={"/bisa-userz.png"} fill className="object-contain" />
        </div>

        <div className="md:max-w-[50%] pt-[60px]">
          <p className="bg-green-300 text-[#2c8853] w-max px-4 py-1 rounded-full">
            Our Mission
          </p>
          <h1 className="pt-5 font-medium md:font-semibold text-[50px]  leading-[60px] text-[#2c2125]">
            Accessible Healthcare.
          </h1>
          <p className="mt-[30px] text-[#838383] text-[20px]">
            Our mission is to build a platform that will contribute to the
            reduction of the mortality rate of the prevailing diseases and to
            improve upon the healthy lifestyle of the individuals
          </p>

          <div className="flex flex-col md:flex-row gap-7 mt-[30px] mb-5 text-[#8687a7]">
            <div>
              <img src={"/anonymous.png"} width="40px" />
              <p className="pt-2">
                Free access to all educative contents and consultation.
              </p>
            </div>
            <div>
              <img src={"/free.png"} width="40px" />
              <p className="pt-2">
                Eradicating disesases such as Diabetes, Malaria, Pneumonia, etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
