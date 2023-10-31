"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
//import { Slide } from 'react-slideshow-image';
//import { Zoom } from 'react-slideshow-image';
//npmjs: https://www.npmjs.com/package/react-slideshow-image
export default function Slideshow() {
  const fadeImages = [
    {
      url: "/images/slider/bg1.jpg",
      caption: "First Slide",
    },
    {
      url: "/images/slider/bg2.jpg",
      caption: "Second Slide",
    },
    {
      url: "/images/slider/bg3.jpg",
      caption: "Third Slide",
    },
  ];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "600px",
  };

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    height: "300px",
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };
  return (
    <div className="w-full">
      <Fade {...zoomInProperties}>
        {fadeImages.map((slideImage, index) => (
          <div
            key={index}
            className="flex justify-center md:items-center items-start w-screen  relative"
          >
            <div
              className="w-screen"
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white">
                {slideImage.caption}
              </h1>
              <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white">
                "Everything you can imagine is real."
              </p>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
