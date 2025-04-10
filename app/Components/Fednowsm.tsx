"use client";
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Set initial active slide index

  const images = [
    "/fed-image1.png",
    "/Fedwire-logo.jpeg",
    "/swiftsm.png",
    "/tch-rtpsm.webp",
    "/fed-image1.png",
    "/Fedwire-logo.jpeg",
    "/swiftsm.png",
    "/tch-rtpsm.webp",
    "/fed-image1.png",
    "/Fedwire-logo.jpeg",
    "/swiftsm.png",
    "/tch-rtpsm.webp",
  ];

  const content = [
    "FedNow, a real-time payment and settlement service developed by the Federal Reserve, aims to modernize the U.S. payment system. With FedNow, payments can be made and received instantly  (24/7/365), and funds are available immediately after the transaction is completed. As a safe and reliable service, it helps streamline various financial processes and improves operations of Financial Institutions ",
    "Fedwire, operated by the Federal Reserve, is a real-time gross settlement system that facilitates electronic transfer of funds between banks. In Fedwire, transactions are processed and settled in real-time and are designed for high-value transactions. Fedwire operates primarily during business hours and acts as a critical infrastructure for interbank settlements",
    "The Society for Worldwide Interbank Financial Telecommunication (SWIFT) connects financial institutions across countries and is used as the primary network for cross-border payments. SWIFT supports a variety of financial messages and enables seamless communication between diverse financial systems and institutions. The system creates comprehensive audit trails and helps financial institutions comply with international regulations",
    "Real-Time Payments (RTP) network by The Clearing House (TCH) provides a modern, efficient, and secure platform for real-time payments. RTP allows for the transfer of funds in real-time, 24/7/365 and payments are settled instantly. RTP reduces the need for manual processing and provides real-time payment status updates and confirmations",
    "FedNow, a real-time payment and settlement service developed by the Federal Reserve, aims to modernize the U.S. payment system. With FedNow, payments can be made and received instantly  (24/7/365), and funds are available immediately after the transaction is completed. As a safe and reliable service, it helps streamline various financial processes and improves operations of Financial Institutions ",
    "Fedwire, operated by the Federal Reserve, is a real-time gross settlement system that facilitates electronic transfer of funds between banks. In Fedwire, transactions are processed and settled in real-time and are designed for high-value transactions. Fedwire operates primarily during business hours and acts as a critical infrastructure for interbank settlements",
    "The Society for Worldwide Interbank Financial Telecommunication (SWIFT) connects financial institutions across countries and is used as the primary network for cross-border payments. SWIFT supports a variety of financial messages and enables seamless communication between diverse financial systems and institutions. The system creates comprehensive audit trails and helps financial institutions comply with international regulations",
    "Real-Time Payments (RTP) network by The Clearing House (TCH) provides a modern, efficient, and secure platform for real-time payments. RTP allows for the transfer of funds in real-time, 24/7/365 and payments are settled instantly. RTP reduces the need for manual processing and provides real-time payment status updates and confirmations",
    "FedNow, a real-time payment and settlement service developed by the Federal Reserve, aims to modernize the U.S. payment system. With FedNow, payments can be made and received instantly  (24/7/365), and funds are available immediately after the transaction is completed. As a safe and reliable service, it helps streamline various financial processes and improves operations of Financial Institutions ",
    "Fedwire, operated by the Federal Reserve, is a real-time gross settlement system that facilitates electronic transfer of funds between banks. In Fedwire, transactions are processed and settled in real-time and are designed for high-value transactions. Fedwire operates primarily during business hours and acts as a critical infrastructure for interbank settlements",
    "The Society for Worldwide Interbank Financial Telecommunication (SWIFT) connects financial institutions across countries and is used as the primary network for cross-border payments. SWIFT supports a variety of financial messages and enables seamless communication between diverse financial systems and institutions. The system creates comprehensive audit trails and helps financial institutions comply with international regulations",
    "Real-Time Payments (RTP) network by The Clearing House (TCH) provides a modern, efficient, and secure platform for real-time payments. RTP allows for the transfer of funds in real-time, 24/7/365 and payments are settled instantly. RTP reduces the need for manual processing and provides real-time payment status updates and confirmations",
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
    <>
      <div className="pl-[5%] pr-[5%] pt-[40px] pb-[70px] bg-[#4f2d83] flex flex-col gap-0">
        <div className="text-center pb-[30px]">
          <h2 className="font-[800] text-[32px] leading-10 text-[white]">
            Payment Schemes
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full rounded-lg flex items-center justify-center">
            <button
              className="bg-[#4f2d83] font-bold text-[28px] text-white p-2 mr-4"
              onClick={prevSlide}
            >
             <img
                src="/prev.png"
                alt="Prev"
                className=""
              />
            </button>
            <div className="relative overflow-hidden my-[20px] border rounded-md bg-[white] w-full h-[120px] sm:h-[160px] flex items-center justify-center">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div
                    className="min-w-full rounded-md flex items-center justify-center"
                    key={index}
                  >
                    <Image
                      src={src}
                      alt={`Slide ${index}`}
                      width={350}
                      height={70}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              className="bg-[#4f2d83] font-bold text-[28px] text-white p-2 ml-4"
              onClick={nextSlide}
            >
              <img
                src="/next.png"
                alt="Next"
                className=""
              />
            </button>
          </div>
          <div className=" w-full h-[30%]  md:h-[80%] border mt-[40px] bg-[#ffffff] rounded-[8px] md:p-[30px] p-[20px] z-[1]">
            <div>
              <p className=" text-[100%] md:text-[18px] md:leading-[28px] leading-[26px] font-normal">
                {content[currentIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
