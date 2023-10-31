export default async function getHeroList() {
  let res = await fetch(`${process.env.API_URL}api/HeroList`, {
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
