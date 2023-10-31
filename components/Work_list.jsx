"use client";
import getWorkList from "@/lib/getWorkList";
import Link from "next/link";
import { FaArrowRight, FaChartLine, FaRegHeart } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
const Work_list = async () => {
  const data = await getWorkList();

  const WorklistStyle = {};

  return (
    <section>
      <div className="container my-10">
        <p className="text-[#20B15A]">WORK LIST</p>
        <h3>
          We provide the Perfect Solution
          <br /> to your business growth
        </h3>

        <div className="my-12   grid grid-rows-1 grid-cols-3 gap-4">
          <div className="  rounded-lg bg-white p-6  dark:bg-neutral-700">
            <div className="rounded-[10px] bg-[#D7F5DC] p-3 mb-5 inline-block">
              <FaChartLine />
            </div>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Grow Your Business
            </h5>

            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              We help identify the best ways to improve your business.
            </p>
            <Link
              href="#"
              className="  text-xs font-medium   leading-normal
             text-black  transition duration-150  "
            >
              Learn More
              <FaArrowRight className="inline-block ml-2" />
            </Link>
          </div>

          <div className="  rounded-lg bg-white p-6  dark:bg-neutral-700">
            <div className="rounded-[10px] bg-[#D7F5DC] p-3 mb-5 inline-block">
              <FaRegHeart />
            </div>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Improve brand loyalty
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              We help identify the best ways to improve your business.
            </p>
            <Link
              href="#"
              className="  text-xs font-medium   leading-normal
             text-black  transition duration-150  "
            >
              Learn More
              <FaArrowRight className="inline-block ml-2" />
            </Link>
          </div>

          <div className="  rounded-lg bg-white p-6  dark:bg-neutral-700">
            <div className="rounded-[10px] bg-[#D7F5DC] p-3 mb-5 inline-block">
              <HiBriefcase />
            </div>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Improve Business Model
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              We help identify the best ways to improve your business.
            </p>

            <Link
              href="#"
              className="  text-xs font-medium   leading-normal
             text-black  transition duration-150  "
            >
              Learn More
              <FaArrowRight className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work_list;
