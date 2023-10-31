export default async function getAllPosts(id) {
  let res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-list/${id}`,
    {
      Cache: "force-cache",
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Fetching Api error");
  }
  return res.json();
}
