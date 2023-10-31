import Link from "next/link";
import { Suspense } from "react";

import getPostCategory from "@/lib/getPostCategory";

export default async function BlogCategories() {
  let blogData = await getPostCategory();

  return (
    <div className="container   m-auto  items-center justify-between">
      <Suspense fallback={<h3>Loadding Post Categories.....</h3>}>
        <div className="grid  md:grid-cols-5 grid-rows-2  sm:grid-col-12 sm:grid-rows-12  gap-2">
          {blogData.map((blog) => (
            <div class="max-w-sm text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
              <div class="p-5">
                <Link href={`blog/${blog.id}`}>
                  <h5 class="mb-2  {styles.red}  tracking-tight text-gray-900 dark:text-white">
                    {blog.name ?? ""}{" "}
                  </h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
