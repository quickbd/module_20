"use client";
import getFeaturedProject from "@/lib/getFeaturedProject";
import { format } from "date-fns";
const Featured_project = async () => {
  const data = await getFeaturedProject();
  return (
    <div className="bg-[#EAEEF3] flex">
      <div className="container my-20">
        <p className="text-[#20B15A]">Featured Project</p>
        <h3>
          We provide the Perfect Solution
          <br /> to your business growth
        </h3>

        <div className=" flex flex-full   my-12  ">
          <div className="flex w-1/2 ">
            <div className="  p-1 md:p-2">
              <img
                alt={data[0].title ?? ""}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={data[0].image ?? ""}
              />
              <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                App Design{" "}
                {format(new Date(data[0].created_at), "Ho MMMM, yyyy")}
              </div>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {data[0].title ?? ""}
              </h5>
            </div>
          </div>

          <div className="flex w-1/2 flex-wrap">
            {data.map((item, index) =>
              index >= 1 && index <= 4 ? (
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt={item.title ?? ""}
                    className="block h-auto w-full rounded-lg object-cover object-center"
                    src={item.image ?? ""}
                  />

                  <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                    App Design{" "}
                    {format(new Date(item.created_at), "Ho MMMM, yyyy")}
                  </div>
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {item.title ?? ""}
                  </h5>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_project;
