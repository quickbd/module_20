import styles from "@/app/blog/styles.module.css";
import getPostDetails from "@/lib/getPostDetails";
import { format } from "date-fns";
import Link from "next/link";

export default async function blogDetails({ params: { postid } }) {
  console.log(postid);
  const post = await getPostDetails(postid);

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
              Date:{" "}
              {format(new Date(post.postDetails.created_at), "dd-MMM-yyyy")}
            </div>
            <p>{post.postDetails.content}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mt-40    m-auto  items-center justify-between">
        <div className="my-20">
          <h1 className="text-center">There are no blog details</h1>
        </div>
      </div>
    );
  }
}
