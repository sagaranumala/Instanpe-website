

// //updated

"use client";
import { useState, useEffect } from "react";
import "./Animation.css";

const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = {
    slides: [
      {
        image: "/fed-image1.png",
        id: "1",
        copy: "FedNow, a real-time payment and settlement service developed by the Federal Reserve, aims to modernize the U.S. payment system. With FedNow, payments can be made and received instantly  (24/7/365), and funds are available immediately after the transaction is completed. As a safe and reliable service, it helps streamline various financial processes and improves operations of Financial Institutions ",
      },
      {
        image: "/Fedwire-logo.jpeg",
        id: "2",
        copy: "Fedwire, operated by the Federal Reserve, is a real-time gross settlement system that facilitates electronic transfer of funds between banks. In Fedwire, transactions are processed and settled in real-time and are designed for high-value transactions. Fedwire operates primarily during business hours and acts as a critical infrastructure for interbank settlements ",
      },
      {
        image: "/Swift-logo2.png",
        id: "3",
        copy: "The Society for Worldwide Interbank Financial Telecommunication (SWIFT) connects financial institutions across countries and is used as the primary network for cross-border payments. SWIFT supports a variety of financial messages and enables seamless communication between diverse financial systems and institutions. The system creates comprehensive audit trails and helps financial institutions comply with international regulations ",
      },
      {
        image: "/tch-rtp.jpg",
        id: "4",
        copy: "Real-Time Payments (RTP) network by The Clearing House (TCH) provides a modern, efficient, and secure platform for real-time payments. RTP allows for the transfer of funds in real-time, 24/7/365 and payments are settled instantly. RTP reduces the need for manual processing and provides real-time payment status updates and confirmations  ",
      },
      {
        image: "/fed-image1.png",
        id: "5",
        copy: "FedNow, a real-time payment and settlement service developed by the Federal Reserve, aims to modernize the U.S. payment system. With FedNow, payments can be made and received instantly  (24/7/365), and funds are available immediately after the transaction is completed. As a safe and reliable service, it helps streamline various financial processes and improves operations of Financial Institutions ",
      },
      {
        image: "/Fedwire-logo.jpeg",
        id: "6",
        copy: "Fedwire, operated by the Federal Reserve, is a real-time gross settlement system that facilitates electronic transfer of funds between banks. In Fedwire, transactions are processed and settled in real-time and are designed for high-value transactions. Fedwire operates primarily during business hours and acts as a critical infrastructure for interbank settlements ",
      },
      {
        image: "/Swift-logo2.png",
        id: "7",
        copy: "The Society for Worldwide Interbank Financial Telecommunication (SWIFT) connects financial institutions across countries and is used as the primary network for cross-border payments. SWIFT supports a variety of financial messages and enables seamless communication between diverse financial systems and institutions. The system creates comprehensive audit trails and helps financial institutions comply with international regulations ",
      },
      {
        image: "/tch-rtp.jpg",
        id: "8",
        copy: "Real-Time Payments (RTP) network by The Clearing House (TCH) provides a modern, efficient, and secure platform for real-time payments. RTP allows for the transfer of funds in real-time, 24/7/365 and payments are settled instantly. RTP reduces the need for manual processing and provides real-time payment status updates and confirmations ",
      },
    ],
  };

  const halfwayIndex = Math.ceil(data.slides.length / 2);
  const itemHeight = 120;
  const shuffleThreshold = halfwayIndex * itemHeight;
  const visibleStyleThreshold = shuffleThreshold / 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data.slides.length]);

  const determinePlacement = (itemIndex: number) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.slides.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.slides.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }

    return 0;
  };

  return (
    <div className="pl-[5%] pr-[5%] pt-[70px] pb-[100px] bg-[#4f2d83] flex flex-col gap-0">
      <div className="text-center">
        <h2 className="font-[800] text-[32px] leading-10 text-[white]">
          Payment Schemes
        </h2>
      </div>
      {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center h-[488px] relative mt-[50px]"> */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center h-[488px] relative mt-[50px]">

        <div
          className="rounded-[8px] absolute z-[0] ml-[100px]"
          data-aos="fade-left"
        >
          <img
            src="/fed-back.png"
            className="hidden sm:block w-[980px] h-[488px]"
            alt="Background Image"
          />
        </div>

        <div className="container">
          <section className="outer-container">
            <div className="carousel-wrapper">
              <div className="carousel">
                <div className="slides">
                  <div className="carousel-inner">
                    {data.slides.map((item, i) => (
                      <button
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={`carousel-item ${
                          activeIndex === i ? "active" : ""
                        } ${
                          Math.abs(determinePlacement(i)) <=
                          visibleStyleThreshold
                            ? "visible"
                            : ""
                        }`}
                        key={item.id}
                        style={{
                          transform: `translateY(${determinePlacement(i)}px)`,
                        }}
                      >
                        <div
                          className={`text ${
                            activeIndex === i ? "active" : ""
                          }`}
                        >
                          <img
                            src={item.image}
                            className={`carousel-image ${
                              activeIndex === i ? "active" : ""
                            }`}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" w-full h-[400px] sm:w-[1200px] sm:h-[400px] bg-[#ffffff] rounded-[8px] sm:p-[60px] p-[40px] z-[1]">
          <div>
            <p className=" text-[14px] leading-[20px] sm:text-[18px] sm:leading-[33px] font-normal">
              {data.slides[activeIndex].copy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;



