"use client";
import getStatList from "@/lib/getStatList";
import { FaPerbyte, FaRegSmile, FaRegThumbsUp, FaUsers } from "react-icons/fa";
const StatList = async () => {
  const data = await getStatList();
  return (
    <section>
      <div className="container grid grid-rows-1 grid-cols-4 gap-5 my-5">
        <div className="block rounded-lg text-center bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="rounded-[10px] bg-[#D7F5DC] p-3 mb-5 inline-block">
            <FaUsers />
          </div>
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.followers ?? ""}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Followers
          </p>
        </div>

        <div className="block rounded-lg text-center bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="rounded-[10px] bg-[#D7F5DC] p-3 mb-5 inline-block">
            <FaRegThumbsUp />
          </div>
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.solved ?? ""}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Solved Probles
          </p>
        </div>

        <div className="block rounded-lg text-center bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="rounded-[10px] bg-[#D7F5DC] p-3 mb-5 inline-block">
            <FaRegSmile />
          </div>
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.customers ?? ""}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Happy Customers
          </p>
        </div>

        <div className="block rounded-lg text-center bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="rounded-[10px] bg-[#D7F5DC] p-3 mb-5 inline-block">
            <FaPerbyte />
          </div>
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.projects ?? ""}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatList;
