export default async function getPostDetails(postid) {
  // console.log(`https://basic-blog.teamrabbil.com/api/post-details/${postid}`);
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${postid}`,
    {
      Cache: "force-cache",
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res) {
    throw new Error("Fetching Api error");
  }
  return res.json();
}
