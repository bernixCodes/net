import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-[30px]  bg-gradient-to-r from-emerald-50 via-white to-gray-100 md:from-emerald-200 md:via-emerald-200 h-[200px] mb-2"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 xl:gap-28 px-10 w-[95%] md:w-[80%] mx-auto">
        <div>
          <h1 className=" text-[20px]  text-black font-bold uppercase">
            Contact
          </h1>
          <p className=" text-[18px] text-[#2B8950] font-medium ">
            Accra Digital Center
          </p>
          <p className=" text-[18px] text-[#2B8950] font-medium ">
            GA-174-4184
          </p>
          <p className=" text-[18px] text-[#2B8950] font-medium ">
            netlyfe23@gmail.com
          </p>
        </div>

        <div>
          <h1 className=" text-[20px]  text-black font-bold uppercase">
            Legal
          </h1>
          <p className=" text-[18px] text-[#2B8950] font-medium ">
            privacy policy
          </p>
          <p className=" text-[18px] text-[#2B8950] font-medium ">Contact</p>
        </div>

        <div>
          <h1 className=" text-[20px]  text-black font-bold uppercase">
            Follow Us
          </h1>
          <div className="flex items-center gap-5 mt-2">
            <a>
              <FaTwitter className="text-[24px] text-[#2B8950] font-medium " />
            </a>
            <a>
              <FaFacebookF className="text-[24px] text-[#2B8950] font-medium " />
            </a>
            <a>
              <FaInstagram className="text-[24px] text-[#2B8950] font-medium " />
            </a>
          </div>
          {/* <p className=" text-[18px] text-[#2B8950] font-medium ">
            privacy policy
          </p>
          <p className=" text-[18px] text-[#2B8950] font-medium ">Contact</p> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
