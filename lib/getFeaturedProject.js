export default async function getFeaturedProject() {
  let res = await fetch(`${process.env.API_URL}api/FeaturedProject`, {
    Cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Fetching Api error");
  }
  return res.json();
}
