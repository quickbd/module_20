"use client";
import Image from "next/image";
const Brands = () => {
  const clientImage = [
    {
      url: "/images/logos_google.png",
      caption: "First Slide",
    },
    {
      url: "/images/logos_monday.png",
      caption: "Second Slide",
    },
    {
      url: "/images/Notion.png",
      caption: "Third Slide",
    },
    {
      url: "/images/Slack.png",
      caption: "Second Slide",
    },
    {
      url: "/images/Trello-logo-blue 1.png",
      caption: "Third Slide",
    },
  ];
  return (
    <div className="w-full bg-[#F5F5F5] my-5">
     <div className="w-full bg-white"></div>
      <div className="container flex">
        {clientImage.map((client, index) => (
          <Image
            key={index}
            src={client.url}
            alt="Digital Agency"
            width={100}
            height={50}
            quality={100}
            style={{ width: "auto" }} // optional
            className="w-full h-full p-5"
          />
        ))}
      </div>
      </div>
    </div>
  );
};
export default Brands;
