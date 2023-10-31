export default async function getPostCategory() {
  let res = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-categories",
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
