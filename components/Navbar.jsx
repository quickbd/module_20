"use client";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#FFFFFF"); //transparent
  const [textColor, setTextColor] = useState("#000000");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#000000");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-20 ease-in duration-300 bg-[#FBFBFB] py-1 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10"
    >
      <div className="container m-auto flex justify-between items-center  bg text-white">
        <Link href="/">
          <Image
            src={logo}
            alt="Digital Agency"
            quality={100}
            style={{ width: "auto", height: "100%" }} // optional
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/team">Team</Link>
          </li>
          <li className="p-4">
            <Link href="/services">Service</Link>
          </li>
          <li className="p-4">
            <Link href="/projects">Project</Link>
          </li>

          <li className="p-4">
            <Link href="/testimonials">Testimonials</Link>
          </li>

          {/* <li className="p-4">
            <Link href="/mod_13_cookie">Cookie</Link>
          </li>

          <li className="p-4">
            <Link href="/about">About</Link>
          </li>

          <li className="p-4">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="p-4">
            <Link href="/contactus">Contact us</Link>
          </li> */}
          <li className="p-4">
            <Link
              className="bg-transparent outline-none border border-indigo-100 rounded-[12px] text-black-500
               font-medium active:scale-95 hover:bg-green-400 hover:text-black-500 focus:ring-2
                focus:ring-green-600 focus:ring-offset-2 disabled:bg-green-400/80 disabled:shadow-none 
                disabled:cursor-not-allowed transition-colors duration-200 px-4 py-2"
              href="/login"
            >
              Login
            </Link>
          </li>
          <li className="p-4">
            <Link
              className="border border-green-500 bg-green-500 text-white rounded-[12px] px-4 py-2   transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
              href="/register"
            >
              Registration
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden  z-10">
          {" "}
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/team">Team</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/service">Service</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/projects">Project</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/testimonials">Testimonials</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/login">Login</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/register">Registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
