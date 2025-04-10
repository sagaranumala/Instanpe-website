
"use client";
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Set initial active slide

  const images = [
    "/Careers-IP.png",
    "/Careers-IP.png",
    "/Careers-IP.png",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  rounded-lg flex items-center justify-center">
      <button
        className=" text-white p-2 mr-4"
        onClick={prevSlide}
      >
       <img
                src="/prev.png"
                alt="Prev"
                className=""
              />
      </button>
      <div className="relative overflow-hidden  w-[80%] h-[50%] flex items-center justify-center">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="min-w-full flex items-center justify-center" key={index}>
              <img src={src} alt={`Slide ${index}`} className="w-[90%]"/>
            </div>
          ))}
        </div>
      </div>
      <button
        className=" text-white p-2 ml-4 "
        onClick={nextSlide}
      >
        <img
      src="/next.png"
      alt="Next"
      className=""
    />
        
      </button>
    </div>
  );
};

export default Carousel;
