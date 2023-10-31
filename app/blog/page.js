"use client";
import getPostCategory from "@/lib/getPostCategory";
import Link from "next/link";
import NewestPost from "./newest/page";

export default async function Blog() {
  const blogData = await getPostCategory();
  return (
    <div className="max-w-[1240px]   m-auto my-20 ">
      <div className=" sm:grid grid-cols-5  px-4 py-6   space-y-6 sm:space-y-0 sm:gap-4">
        <div className=" col-span-1 ">
          <div className="rounded-md bg-white   ">
            <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">
              Categories
            </h1>
            <div className="bg-white rounded-md list-none  text-center ">
              {blogData.map((blog) => (
                <li className="py-3 border-b-2">
                  <Link
                    href={`blog/${blog.id}`}
                    className="list-none  hover:text-indigo-600"
                  >
                    {blog.name ?? ""}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>

        <div className=" col-span-4 flex items-center">
          <div>
            <div className="font-bold text-xl my-5">Latest Post</div>
            <NewestPost />
          </div>
        </div>
      </div>
    </div>
  );
}
