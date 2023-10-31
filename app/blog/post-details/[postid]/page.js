import Link from "next/link";

import styles from "@/app/blog/styles.module.css";

export default async function blogDetails({ params }) {
  //let post = await getPostDetails(params.postid);
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${params.postid}`
  );
  const post = await res.json();
  console.log(post.postDetails);
  if (post.postDetails) {
    return (
      <div className="container mt-40    m-auto  items-center justify-between">
        <div className="my-20">
          <div className="text-right mt-20">
            <Link
              href="/blog"
              className="align-content-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back
            </Link>
          </div>
          <div>
            <img
              className="rounded-t-lg"
              src={`${post.postDetails.img}`}
              alt=""
            />
            <h1 className={styles.red}>{post.postDetails.title}</h1>
            <div className="text-xs font-light">
              Date: {post.postDetails.created_at}
            </div>
            <p>{post.postDetails.content}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return "Page Not Found";
  }
}
