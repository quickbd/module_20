"use client";
import getHeroList from "@/lib/getHeroList";
import Link from "next/link";
import Brands from "./Brands";
const Hero_banner = async () => {
  const data = await getHeroList();
  return (
    <div className="w-full bg-[#D7F5DC] ">
      <div className="container   pt-32   text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
        <div className="grid  md:grid-cols-2 grid-cols-1  gap-4">
          <div className="text-left">
            <h1 className="mb-6 mt-5 text-5xl font-bold">{data.title ?? ""}</h1>
            <h3 className="mb-8 text-3xl font-bold">
              {data.description ?? ""}
            </h3>
            <Link
              className="btn btn-success bg-green-500 w-auto rounded-[15px] text-white
              px-4 py-3"
              href="/"
            >
              Get started
            </Link>
          </div>

          <div>
            <div className="mx-auto ">
              <div className="flex flex-wrap">
                <div className="flex w-full flex-wrap">
                  <div className="w-2/3 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full max-h-[270px] rounded-lg object-cover object-center"
                      src={data.image1 ?? ""}
                    />
                  </div>
                  <div className="w-1/3 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full  max-h-[270px] rounded-lg object-cover object-center"
                      src={data.image2 ?? ""}
                    />
                  </div>
                </div>
                <div className="flex w-full flex-wrap">
                  <div className="w-1/3 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full  max-h-[164px] rounded-lg object-cover object-center"
                      src={data.image3 ?? ""}
                    />
                  </div>
                  <div className="w-2/3 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full  w-full  max-h-[164px] rounded-lg object-cover object-center"
                      src={data.image4 ?? ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <Brands />
      </div>
    </div>
  );
};

export default Hero_banner;
