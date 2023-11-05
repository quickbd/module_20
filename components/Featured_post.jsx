"use client";
import getFeaturedPost from "@/lib/getFeaturedPost";
import { format } from "date-fns";
import { Link } from "next/link";
const Featured_post = async () => {
  let getdata = await getFeaturedPost();
  console.log(getdata);
  const postData = getdata.data;
  if (postData) {
    return (
      <div className="bg-[#EAEEF3] flex">
        <div className="container my-20">
          <p className="text-[#20B15A]">Featured Project</p>
          <h3>
            We provide the Perfect Solution
            <br /> to your business growth
          </h3>

          <div className=" flex flex-full   my-12  ">
            {Array.isArray(postData)
              ? postData.map((item, index) => {
                  <div className="flex w-1/2 " key={index}>
                    <div className="  p-1 md:p-2">
                      <Link
                        href={`/blog/${item?.category?.slug}/${item?.slug}`}
                      >
                        {" "}
                        <img
                          alt={item?.title ?? ""}
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src={item?.image ?? ""}
                        />
                      </Link>
                      <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                        App Design{" "}
                        {format(new Date(item.created_at), "Ho MMMM, yyyy")}
                      </div>
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {item?.title ?? ""}
                      </h5>
                    </div>
                  </div>;
                })
              : null}

            <div className="flex w-1/2 flex-wrap">
              {postData.map((item, index) => {
                <div className="w-1/2 p-1 md:p-2" key={index}>
                  <Link href={`/blog/${item?.category?.slug}/${item?.slug}`}>
                    <img
                      alt={item?.title ?? ""}
                      className="block h-auto w-full rounded-lg object-cover object-center"
                      src={item?.image ?? ""}
                    />
                  </Link>

                  <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                    App Design{" "}
                    {format(new Date(item?.created_at), "Ho MMMM, yyyy")}
                  </div>
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {item?.title ?? ""}
                  </h5>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <>
        <div></div>
      </>
    );
};

export default Featured_post;
