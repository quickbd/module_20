import getAllPosts from "@/lib/getAllPosts";
import getPostCategory from "@/lib/getPostCategory";
import { format } from "date-fns";
import Link from "next/link";

export default async function Blog({ params }) {
  const id = params.slug;
  const allPostData = await getAllPosts(id);
  const blogData = await getPostCategory();
  let title = blogData[id].name;

  return (
    <div className="max-w-[1240px]   m-auto my-20 ">
      <div className=" sm:grid grid-cols-5  px-4 py-6   space-y-6 sm:space-y-0 sm:gap-4">
        <div className=" col-span-1 ">
          <div className="bg-white  rounded-md">
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
            <div className="font-bold text-xl my-5">{title ?? ""}</div>
            <div className="grid  grid-cols-3 grid-rows-4 gap-2">
              {allPostData.map((post) => (
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
                  <Link href={`/blog/${id}/${post.id}`}>
                    <img class="rounded-t-lg" src={`${post.img}`} alt="" />
                  </Link>
                  <div class="p-5">
                    <Link href={`/blog/${id}/${post.id}`}>
                      <h5 class="mb-2  {styles.red} font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title ?? ""}{" "}
                      </h5>
                    </Link>
                    <div className="float-end text-end text-xs font-light">
                      Date: {format(new Date(post.created_at), "dd-MMM-yyyy")}
                    </div>
                    <p> {post.short}</p>
                    <Link
                      href={`/blog/${id}/${post.id}`}
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        class="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      ></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
