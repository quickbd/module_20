export default async function getTeamList() {
  let res = await fetch(`${process.env.API_URL}api/TeamList`, {
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
