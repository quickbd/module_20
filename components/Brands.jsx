"use client";
import getBrandList from "@/lib/getBrandList";
const Brands = async () => {
  const clientImage = await getBrandList();

  return (
    <div className="w-full bg-[#D7F5DC]">
      <div className="w-full bg-white my-5">
        <div className="container flex flex-col items-center  md:flex md:flex-row justify-between">
          {clientImage.map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={client.name}
              className="w-auto p-5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Brands;
