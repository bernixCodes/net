import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Contact from "@/components/Contact";
import Link from "next/link";

const regions = [
  "Ashanti",
  "Brong-Ahafo",
  "Central",
  "Eastern",
  "Greater Accra",
  "Northern",
  "Upper East",
  "Upper West",
  "Volta",
  "Western",
];

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");
  const [foundUsBy, setFoundUsBy] = useState("");
  const [tel, setTel] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 p-[5%] bg-slate-100 ">
        <div className="container ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-medium leading-relaxed tracking-wide">
              Welcome to{" "}
              <Link href={"/"}>
                <span className="text-[#2B8950]">Net</span>
                <span className="text-[#A69B9A]">Lyfe</span>
              </Link>
            </h1>
            <p className="text-lg f leading-relaxed tracking-wide text-gray-500">
              With us,you always have a doctor.{" "}
            </p>

            <div>
              <Image
                src={"/signup-1.png"}
                alt=""
                width={300}
                height={300}
                // fill
                // style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-lg my-8 leading-relaxed tracking-wide text-gray-600">
              Download the App
            </p>
            <div className="flex gap-5 flex-col md:flex-row">
              <div class="flex mt-3 w-48 h-12 cursor-pointer bg-black text-white rounded-full items-center justify-center">
                <div class="mr-3">
                  <svg
                    viewBox="30 336.7 120.9 129.2"
                    className=" w-[20px] xl:w-[30px]"
                  >
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-xs">GET IT ON</div>
                  <div class=" text-sm xl:text-xl font-medium  -mt-1">
                    Google Play
                  </div>
                </div>
              </div>
              <div class="flex mt-3 w-48 h-12 cursor-pointer bg-black text-white rounded-full items-center justify-center">
                <div class="mr-3">
                  <svg viewBox="0 0 384 512" className=" w-[20px] xl:w-[30px]">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-xs">Download on the</div>
                  <div class=" text-sm xl:text-xl font-medium  -mt-1">
                    App Store
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <Image src={"/logo.png"} alt="" width={100} height={100} />
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-md shadow-lg p-[5%] "
          >
            <div className="flex flex-col mb-4">
              <div className="my-4">
                <p>Create your account</p>
                <p className="text-gray-400">
                  Enter your personal details to create account
                </p>
              </div>
              <div className="flex flex-row mb-4 mt-2">
                <div className="w-1/2 mr-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="border border-gray-400 rounded py-2 px-3 w-full"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="border border-gray-400 rounded py-2 px-3 w-full"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-400 rounded py-2 px-3 w-full"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="border border-gray-400 rounded py-2 px-3 w-full"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-0 mr-3 mt-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="foundUsBy" className="text-sm font-medium">
                  How did you hear about us?
                </label>
                <select
                  id="foundUsBy"
                  className="border border-gray-400 rounded py-2 px-3 w-full"
                  value={foundUsBy}
                  onChange={(event) => setFoundUsBy(event.target.value)}
                >
                  <option value="">Select a region</option>
                  <option value="social media">Social Media</option>
                  <option value="internet search">Internet Search</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="flex flex-row mb-4 mt-2">
                <div className="w-1/2 mr-2">
                  <label htmlFor="tel" className="text-sm font-medium">
                    Telephone Number
                  </label>
                  <input
                    type="text"
                    id="tel"
                    className="border border-gray-400 rounded py-2 px-3 w-full"
                    value={tel}
                    onChange={(event) => setTel(event.target.value)}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label htmlFor="gender" className="text-sm font-medium">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="border border-gray-400 rounded py-2 px-3 w-full"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="region" className="text-sm font-medium">
                  Region
                </label>
                <select
                  id="region"
                  className="border border-gray-400 rounded py-2 px-3 w-full"
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                >
                  <option value="">Select a region</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-700 w-full text-white font-bold py-2 px-4 rounded"
            >
              Create Account
            </button>
            <p className="my-4 text-center text-gray-400">
              Already have an account?{" "}
              <Link href={"/login"}>
                <span className="text-lime-300">Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="">
        <Contact />
      </div>
    </>
  );
}
