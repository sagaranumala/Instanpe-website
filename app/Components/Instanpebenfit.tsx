
import React from 'react';

const InstanpeBenefits = () => {
  const InstanpeBenefits = [
    {
      id: 1,
      image: "/icon3.png",
      content:
        "Enhanced <b>Customer Experience</b> for faster and convenient payment options",
    },
    {
      id: 2,
      image: "/icon5.png",
      content:
        "<b>Plug & Play</b> architecture to support faster time to market solutions",
    },
    {
      id: 3,
      image: "/icon1.png",
      content:
        "<b>Multi-Rail support</b> to instantaneously move money between disparate parties",
    },
    {
      id: 4,
      image: "/icon2.png",
      content:
        "<b>Payments as a Service</b> APIs to support seamless payment processing",
    },
    {
      id: 5,
      image: "/icon6.png",
      content: "<b>Business use cases</b> support to fulfill customer needs",
    },
    {
      id: 6,
      image: "/icon4.png",
      content: "<b> Cloud </b> as well as <b> on-prem</b> based  <b>payment processing support</b>",
    },
  ];

  return (
    <>
      <div>
        <div className=" w-full sm:my-[50px] md:my-[60px] lg:my-[100px]  sm:w-full sm:h-[400px] md:w-[full] md:h-[400px]  h-[40%]">
          <div className="flex relative sm:mx-[20px] mx-[20px]">
            <div className="sm:text-left text-center  w-[full] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[60%] h-[35%] md:ml-[50px] lg:ml-[50px] sm:ml-[30px] sm:mt-[10px] sm:mb-[20px] md:mb-[0px] md:mt-[0px] lg:mt-[50px] mt-[60px] rounded-br-[12px] rounded-tr-[12px] space-y-5 bg-[#F8F8F8] border shadow-md  text-white z-10">
              <div className="py-[20px] md:text-center  lg:text-left px-[20px] sm:px-[80px] sm:py-[60px]  md:pt-[50px]">
                <h2 className="font-extrabold   sm:text-4xl text-2xl leading-10 text-[#4F2D83] mb-[20px]">
                  Why Instanpe ?
                </h2>
                <p className="sm:font-normal  sm:text-[18px] text-[90%]  sm:leading-[30px] text-[#000000]">
                  Financial Institutions need an efficient and reliable system to handle large volumes of payment transactions daily. Instanpe has created a <span className="font-bold">Unified Payments System</span> to help Financial Institutions connect their existing payments channels and infrastructure to various payment schemes seamlessly. Our unique services and solutions help Financial Institutions control the payments process and greatly improve their customer service.
                </p>
              </div>
            </div>
            <div className=" hidden lg:block  w-[710px] h-[470px] absolute top-0 right-0 z-0">
              <img src="/instanpebenfitimg.png" alt="instanpebenfitimg" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[20px] sm:gap-[50px] mt-12  sm:mx-[80px] md:mx-[10px] sm:pt-[130px] md:py-[20px] lg:my-[50px]  lg:pt-[100px] py-1">
          {InstanpeBenefits.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center rounded-md gap-4 bg-[#f8f8f89f] border  sm:px-8 sm:py-4 px-2 py-0 h-[100px] sm:h-[150px] w-[80%] sm:w-[480px] md:w-[40%]  lg:w-[25%] lg:p-[10px] xl:p-[30px] text-center shadow-md hover:shadow-lg"
            >
              <div className="sm:h-[90px] h-[40px] flex items-center justify-center">
                <img className="sm:w-[70px] sm:h-[50px] w-[50px] h-[40px]" src={item.image} />
              </div>
              <div
                className="sm:w-[300px] sm:mt-[20px] text-left sm:h-[90px] sm:text-[16px] text-[14px] leading-[22px] font-normal"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InstanpeBenefits;
