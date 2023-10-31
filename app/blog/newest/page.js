import { format } from "date-fns";
import Link from "next/link";
import { Suspense } from "react";

async function getNewestBlogs() {
  let res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest", {
    Cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Fetching Api error");
  }
  return res.json();
}

export default async function NewestPost() {
  let blogData = await getNewestBlogs();

  return (
    <div className="container  w-100 m-auto  items-center justify-between">
      <Suspense fallback={<h3>Loadding Post.....</h3>}>
        <div className="grid  grid-cols-3 grid-rows-4 gap-2">
          {blogData.map((blog) => (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
              <Link href={`blog/${blog.category_id}/${blog.id}`}>
                <img class="rounded-t-lg" src={`${blog.img}`} alt="" />
              </Link>
              <div class="p-5">
                <Link href={`blog/${blog.category_id}/${blog.id}`}>
                  <h5 class="mb-2  {styles.red} font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title ?? ""}{" "}
                  </h5>
                </Link>
                <div className="float-end text-end text-xs font-light">
                  Date: {format(new Date(blog.created_at), "dd-MMM-yyyy")}
                </div>
                <Link
                  href={`blog/${blog.category_id}/${blog.id}`}
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
      </Suspense>
    </div>
  );
}
