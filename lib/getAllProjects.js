export default async function getAllProjects() {
  let res = await fetch(`${process.env.API_URL}api/AllProject`, {
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
