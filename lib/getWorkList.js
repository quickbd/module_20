const getWorkList = async () => {
  let res = await fetch(`${process.env.API_URL}api/WorkList`, {
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
};

export default getWorkList;
